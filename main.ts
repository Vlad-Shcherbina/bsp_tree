import assert from './assert.js';
import { init_shader_program } from './webgl_util.js';

let canvas = document.getElementById('glcanvas') as HTMLCanvasElement;
let gl = canvas.getContext('webgl');
assert(gl !== null);

gl.clearColor(0.0, 0.0, 0.2, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

let program = init_shader_program(gl, {
    vs: `
    attribute vec4 vertex_position;
    // uniform mat4 projection_matrix;
    void main() {
    //   gl_Position = projection_matrix * vertex_position;
        gl_Position = vertex_position;
    }`,
    fs: `
    precision mediump float;
    uniform vec4 color;
    void main() {
    //   gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
        gl_FragColor = color;
    }`,
    uniforms: ['color'],
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

gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
