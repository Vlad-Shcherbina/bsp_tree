import assert from './assert.js';
import { init_shader_program } from './webgl_util.js';
import { mat4 } from './vendor/gl-matrix.js';

let canvas = document.getElementById('glcanvas') as HTMLCanvasElement;
let gl = canvas.getContext('webgl');
assert(gl !== null);

gl.clearColor(0.0, 0.0, 0.2, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

let program = init_shader_program(gl, {
    vs: `
    attribute vec4 vertex_position;
    uniform mat4 projection_matrix;
    void main() {
        gl_Position = projection_matrix * vertex_position;
    }`,
    fs: `
    precision mediump float;
    uniform vec4 color;
    void main() {
        gl_FragColor = color;
    }`,
    uniforms: ['color', 'projection_matrix'],
    attribs: ['vertex_position'],
});

let position_buffer = gl.createBuffer();
assert(position_buffer !== null);
gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
let positions = [0.9, 0.9, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

gl.bindBuffer(gl.ARRAY_BUFFER, position_buffer);
gl.vertexAttribPointer(
    program.attribs.vertex_position,
    2, // num_components
    gl.FLOAT, // type
    false, // normalize
    0, // stride
    0, // offset
);
gl.enableVertexAttribArray(program.attribs.vertex_position);

gl.useProgram(program.program);
gl.uniform4f(program.uniforms.color, 1.0, 1.0, 0.0, 1.0);

const fieldOfView = Math.PI / 4;
const aspect = canvas.clientWidth / canvas.clientHeight;
const zNear = 0.1;
const zFar = 100.0;
const m = mat4.create();
console.log(m);
mat4.perspective(m, fieldOfView, aspect, zNear, zFar);
mat4.translate(m, m, [0, 0, -6]);
gl.uniformMatrix4fv(program.uniforms.projection_matrix, false, m);

gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
