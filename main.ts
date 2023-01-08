import assert from './assert.js';
import { init_shader_program } from './webgl_util.js';
import { mat4 } from './vendor/gl-matrix.js';
import { two_sided_bottle_point, two_sided_bottle_normal } from './bottle.js';
import * as bsp from './bsp.js';
import { build_texture } from './texture.js';

let canvas = document.getElementById('glcanvas') as HTMLCanvasElement;
let gl = canvas.getContext('webgl')!;
assert(gl !== null);

let program = init_shader_program(gl, {
    vs: `
    attribute vec4 vertex_position;
    attribute vec2 tex_coord;
    attribute vec3 normal;
    uniform mat4 projection_matrix;
    uniform vec3 camera_pos;
    varying vec2 v_tex_coord;
    varying vec3 v_normal;
    varying vec3 v_dir_to_camera;
    void main() {
        gl_Position = projection_matrix * vertex_position;
        v_tex_coord = tex_coord;
        v_normal = normal;
        v_dir_to_camera = camera_pos - vertex_position.xyz;
    }`,
    fs: `
    precision mediump float;
    uniform sampler2D texture;
    varying vec2 v_tex_coord;
    varying vec3 v_normal;
    varying vec3 v_dir_to_camera;
    void main() {
        vec3 d = normalize(v_dir_to_camera);
        vec3 n = normalize(v_normal);
        float opacity = 1.0 - pow(0.4, 1.0 / max(abs(dot(d, n)), 0.001));
        gl_FragColor = texture2D(texture, v_tex_coord) * opacity;
    }`,
    uniforms: ['projection_matrix', 'camera_pos'],
    attribs: ['vertex_position', 'tex_coord', 'normal'],
});

let na = 20 + 1;
let nb = 80 + 1;

console.time('generate data');
let data: number[] = [];
for (let ib = 0; ib < nb; ib++) {
    for (let ia = 0; ia < na; ia++) {
        let u = ib / (nb - 1);
        let v = ia / (na - 1);
        let pos = two_sided_bottle_point(0.02, u, v);
        let n = two_sided_bottle_normal(u, v);
        data.push(...pos, u, v, ...n);
    }
}
console.timeEnd('generate data');

let indices: number[] = [];
for (let ia = 0; ia < na - 1; ia++) {
    for (let ib = 0; ib < nb - 1; ib++) {
        let i = ia + ib * na;
        indices.push(i, i + na, i + 1);
        indices.push(i + 1, i + na, i + na + 1);
    }
}
console.log(data.length / 8, 'points');
console.log(indices.length / 3, 'triangles');

console.time('build bsp tree');
let tree = bsp.build_bsp_tree(indices, data);
console.timeEnd('build bsp tree');
console.log(data.length / 8, 'points');

let tmp_indices: number[] = [];
bsp.render_bsp_tree(tree, [0, 0, 0], tmp_indices);
let num_indices = tmp_indices.length;
console.log(num_indices / 3, 'triangles');

let position_buffer = gl.createBuffer();
assert(position_buffer !== null);
gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

let indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, 2 * num_indices, gl.DYNAMIC_DRAW);

var texture = gl.createTexture();
assert(texture !== null);
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

let tex_data = build_texture(256, 64);
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 256, 64, 0, gl.RGBA, gl.UNSIGNED_BYTE,
    new Uint8Array(tex_data));
gl.generateMipmap(gl.TEXTURE_2D);

////////////////

gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
gl.enableVertexAttribArray(program.attribs.vertex_position);
gl.vertexAttribPointer(
    program.attribs.vertex_position,
    3, // num_components
    gl.FLOAT, // type
    false, // normalize
    4 * 8, // stride
    0, // offset
);
gl.enableVertexAttribArray(program.attribs.tex_coord);
gl.vertexAttribPointer(
    program.attribs.tex_coord,
    2, // num_components
    gl.FLOAT, // type
    false, // normalize
    4 * 8, // stride
    4 * 3, // offset
);
gl.enableVertexAttribArray(program.attribs.normal);
gl.vertexAttribPointer(
    program.attribs.normal,
    3, // num_components
    gl.FLOAT, // type
    false, // normalize
    4 * 8, // stride
    4 * 5, // offset
);

gl.useProgram(program.program);

function draw(t: number) {
    gl.clearColor(0.0, 0.0, 0.2, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const fieldOfView = Math.PI / 3;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const m = mat4.create();
    mat4.perspective(m, fieldOfView, aspect, zNear, zFar);
    let m2 = mat4.create();

    let camera_pos: [number, number, number] =
        [Math.cos(t / 2000) * 4, 3, Math.sin(t / 2000) * 4];

    mat4.lookAt(m2, camera_pos, [0, 2, 0], [0, 1, 0]);
    mat4.multiply(m, m, m2);
    gl.uniformMatrix4fv(program.uniforms.projection_matrix, false, m);
    gl.uniform3fv(program.uniforms.camera_pos, camera_pos);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    let indices: number[] = [];
    bsp.render_bsp_tree(tree, camera_pos, indices);
    gl.bufferSubData(gl.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(indices));
    assert(indices.length == num_indices);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

    requestAnimationFrame(draw);
}
draw(0);
