import assert from './assert.js';
import { init_shader_program } from './webgl_util.js';
import { mat4 } from './vendor/gl-matrix.js';

let canvas = document.getElementById('glcanvas') as HTMLCanvasElement;
let gl = canvas.getContext('webgl')!;
assert(gl !== null);

let program = init_shader_program(gl, {
    vs: `
    attribute vec4 vertex_position;
    attribute vec2 tex_coord;
    attribute vec3 normal;
    uniform mat4 projection_matrix;
    varying vec2 v_tex_coord;
    varying vec3 v_normal;
    void main() {
        // tex_coord;
        gl_Position = projection_matrix * vertex_position;
        v_tex_coord = tex_coord;
        v_normal = normal;
    }`,
    fs: `
    precision mediump float;
    uniform vec4 color;
    uniform sampler2D texture;
    varying vec2 v_tex_coord;
    varying vec3 v_normal;
    void main() {
        // gl_FragColor = color;
        color;
        v_tex_coord;
        // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // gl_FragColor = vec4(v_tex_coord, 0.0, 1.0);
        // gl_FragColor = texture2D(texture, v_tex_coord);
        gl_FragColor = vec4(normalize(v_normal) * 0.5 + 0.5, 1.0);
    }`,
    uniforms: ['color', 'projection_matrix'],
    attribs: ['vertex_position', 'tex_coord', 'normal'],
});

let position_buffer = gl.createBuffer();
assert(position_buffer !== null);
gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
let data = [
     2.0,  1.0, 0.0,   1.0, 1.0,    1.0, 0.0, 1.0,
    -2.0,  0.5, 0.0,   0.0, 1.0,   -1.0, 0.0, 1.0,
     2.0, -1.0, 0.0,   1.0, 0.0,    1.0, 0.0, 1.0,
    -2.0, -1.0, 0.0,   0.0, 0.0,   -1.0, 0.0, 1.0,
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);

var texture = gl.createTexture();
assert(texture !== null);
gl.bindTexture(gl.TEXTURE_2D, texture);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

let size = 128;
let tex_data = [];
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        tex_data.push(Math.random() * 255, Math.random() * 255, Math.random() * 255, 255);
    }
}
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE,
    new Uint8Array(tex_data));
gl.generateMipmap(gl.TEXTURE_2D);

////////////////

gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
gl.enableVertexAttribArray(program.attribs.vertex_position);
gl.vertexAttribPointer(
    program.attribs.vertex_position,
    2, // num_components
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
gl.uniform4f(program.uniforms.color, 1.0, 1.0, 0.0, 1.0);

function draw(t: number) {
    gl.clearColor(0.0, 0.0, 0.2, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const fieldOfView = Math.PI / 4;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const m = mat4.create();
    mat4.perspective(m, fieldOfView, aspect, zNear, zFar);
    let m2 = mat4.create();
    mat4.lookAt(m2, [0, 1, -6], [0, 0, 0], [0, 1, 0]);
    mat4.multiply(m, m, m2);
    mat4.rotateY(m, m, t / 2000);
    gl.uniformMatrix4fv(program.uniforms.projection_matrix, false, m);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(draw);
}
draw(0);
