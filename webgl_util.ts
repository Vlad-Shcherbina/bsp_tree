import assert from './assert.js';

function load_shader(gl: WebGLRenderingContext, type: number, source: string) {
    let shader = gl.createShader(type);
    assert(shader !== null);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(shader));
        let type_str = type === gl.VERTEX_SHADER ? 'vertex' : 'fragment';
        assert(false, type_str + ' shader compile error');
    }
    return shader;
}

export function init_shader_program<U extends string, A extends string>(
    gl: WebGLRenderingContext,
    args: { vs: string, fs: string, uniforms: U[], attribs: A[]},
): {
    program: WebGLProgram,
    uniforms: { [K in U]: WebGLUniformLocation },
    attribs: { [K in A]: number },
} {
    let { vs, fs, uniforms: uniform_names, attribs: attrib_names } = args;
    let vertex_shader = load_shader(gl, gl.VERTEX_SHADER, vs);
    let fragment_shader = load_shader(gl, gl.FRAGMENT_SHADER, fs);
    let program = gl.createProgram();
    assert(program !== null);
    gl.attachShader(program, vertex_shader);
    gl.attachShader(program, fragment_shader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(gl.getProgramInfoLog(program));
        assert(false, 'shader program link error');
    }
    let uniforms = {} as { [K in U]: WebGLUniformLocation };
    for (const name of uniform_names ) {
        let loc = gl.getUniformLocation(program, name);
        assert(loc !== null, 'uniform location error: ' + name)
        uniforms[name] = loc;
    }
    let attribs = {} as { [K in A]: number };
    for (const name of attrib_names) {
        let loc = gl.getAttribLocation(program, name);
        assert(loc !== null, 'attrib location error: ' + name)
        attribs[name] = loc;
    }
    return {
        program,
        uniforms,
        attribs,
    };
}
