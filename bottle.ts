import { vec3 } from './vendor/gl-matrix.js';

function b_spline4(t: number, p: number[]): number {
    return ((1 - t) * (1 - t) * (1 - t) * p[0] +
        (4 - 6 * t * t + 3 * t * t * t) * p[1] +
        (1 + 3 * t + 3 * t * t - 3 * t * t * t) * p[2] +
        t * t * t * p[3]) / 6.0;
}

function b_spline4_diff(t: number, p: number[]): number {
    return 0.5 * (-(1 - t) * (1 - t) * p[0] +
        (-4 * t + 3 * t * t) * p[1] +
        (1 + 2 * t - 3 * t * t) * p[2] +
        t * t * p[3]);
}

function bottle_rate(u: number): number {
    let d: number[] = [3, 1, 1, 1.1, 1.5, 3, 5, 5, 1, 1.5];
    let sum = 0;
    for (let i = 0; i < 10; i++) sum += d[i];
    u *= sum;
    sum = 0;
    let i = 0;
    while (i < 10 && u > sum + d[i]) { sum += d[i]; i++; }
    let res = 0.5 * (i + (u - sum) / d[i]);
    return res;
}

const bottle_len = [0, 0, 0, 2, 3.5, 7, 7, 7];
const bottle_width = [0, 0.3, 0.6, 0.5, 0, 0.05, 0.3, 0.55];

const bottle_spine_x = [0, 0, 0, 0, -0.5, 0, 1.5, 0, 0, 0];
const bottle_spine_z = [-1, 0, 1, 2, 2.5, 4, 3, 2, 0, -2];

export function bottle_point(u: number, v: number): [number, number, number] {
    u = bottle_rate(u);
    let w = b_spline4(u - Math.floor(u), bottle_width.slice(Math.floor(u)));
    let l = b_spline4(u - Math.floor(u), bottle_len.slice(Math.floor(u)));

    let cx = b_spline4(l - Math.floor(l), bottle_spine_x.slice(Math.floor(l)));
    let cz = b_spline4(l - Math.floor(l), bottle_spine_z.slice(Math.floor(l)));

    let dx = b_spline4_diff(l - Math.floor(l), bottle_spine_x.slice(Math.floor(l)));
    let dz = b_spline4_diff(l - Math.floor(l), bottle_spine_z.slice(Math.floor(l)));

    let len = Math.sqrt(dx * dx + dz * dz);
    dx /= len;
    dz /= len;
    let ort1 = [-dz, 0, dx];
    let ort2 = [0, 1, 0];

    let pos = [cx, 0, cz];
    vec3.scaleAndAdd(pos, pos, ort1, w * Math.sin(2 * Math.PI * v));
    vec3.scaleAndAdd(pos, pos, ort2, w * Math.cos(2 * Math.PI * v));

    return [pos[0], pos[2], pos[1]];
}

export function bottle_normal(u: number, v: number) {
    const eps = 0.0002;
    let p1 = bottle_point(u - eps, v);
    let p2 = bottle_point(u + eps, v);
    let p3 = bottle_point(u, v - eps);
    let p4 = bottle_point(u, v + eps);
    let n1 = vec3.sub(vec3.create(), p2, p1);
    let n2 = vec3.sub(vec3.create(), p4, p3);
    let n = vec3.cross(vec3.create(), n1, n2);
    vec3.normalize(n, n);
    return n;
}

export function two_sided_bottle_point(thickness: number, u: number, v: number) {
    let pos: [number, number, number], n: [number, number, number];
    if (u < 0.5) {
        pos = bottle_point(u * 2, v); n = bottle_normal(u * 2, v);
        let res = vec3.create();
        vec3.scaleAndAdd(res, pos, n, thickness * 0.5);
        return res;
    }
    else {
        pos = bottle_point(u * 2 - 1, 0.5 - v); n = bottle_normal(u * 2 - 1, 0.5 - v);
        let res = vec3.create();
        vec3.scaleAndAdd(res, pos, n, -thickness * 0.5);
        return res;
    }
}

export function two_sided_bottle_normal(u: number, v: number) {
    if (u < 0.5) {
        return bottle_normal(u * 2, v);
    } else {
        return vec3.negate(vec3.create(), bottle_normal(u * 2 - 1, 0.5 - v));
    }
}
