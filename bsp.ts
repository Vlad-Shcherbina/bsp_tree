import assert from "./assert.js";
import { vec3 } from "./vendor/gl-matrix.js";

const eps = 1e-4;

export type BspNode = {
    plane: Plane,
    pos: BspNode | null,
    neg: BspNode | null,
    triangles: number[],
};

export function build_bsp_tree(triangles: number[], vertex_data: number[]): BspNode | null {
    if (triangles.length === 0) {
        return null;
    }
    let best_plane = find_best_cut(triangles, vertex_data);
    let split = cut_triangles(best_plane, triangles, vertex_data);
    assert(split.plane_triangles.length > 0);
    let pos = build_bsp_tree(split.pos_triangles, vertex_data);
    let neg = build_bsp_tree(split.neg_triangles, vertex_data);
    return { plane: best_plane, pos, neg, triangles: split.plane_triangles };
}

export function render_bsp_tree(
    node: BspNode | null,
    camera_pos: [number, number, number],
    output: number[],
) {
    if (node === null) {
        return;
    }
    let { plane, pos, neg, triangles } = node;
    let { n, d } = plane;
    let dot = vec3.dot(n, camera_pos) - d;
    if (dot > 0) {
        render_bsp_tree(neg, camera_pos, output);
        output.push(...triangles);
        render_bsp_tree(pos, camera_pos, output);
    } else {
        render_bsp_tree(pos, camera_pos, output);
        output.push(...triangles);
        render_bsp_tree(neg, camera_pos, output);
    }
}

export type Plane = {
    n: [number, number, number],
    d: number,
};

function triangle_plane(vertices: [number, number, number], vertex_data: number[]): Plane {
    let a = vertices[0];
    let b = vertices[1];
    let c = vertices[2];
    let a_pos = vertex_data.slice(8 * a, 8 * a + 3);
    let b_pos = vertex_data.slice(8 * b, 8 * b + 3);
    let c_pos = vertex_data.slice(8 * c, 8 * c + 3);
    let u = vec3.subtract(vec3.create(), b_pos, a_pos);
    let v = vec3.subtract(vec3.create(), c_pos, a_pos);
    let n = vec3.cross(vec3.create(), u, v);
    vec3.normalize(n, n);
    let d = (vec3.dot(n, a_pos) + vec3.dot(n, b_pos) + vec3.dot(n, c_pos)) / 3;

    assert(Math.abs(vec3.dot(n, a_pos) - d) < eps);
    assert(Math.abs(vec3.dot(n, b_pos) - d) < eps);
    assert(Math.abs(vec3.dot(n, c_pos) - d) < eps);

    return { n, d };
}

function find_best_cut(triangles: number[], vertex_data: number[]): Plane {
    const stride = 8;
    const table: [number, number][] = [
        [0, 0], [0, 1], [0, 1], [0, 1],
        [1, 0], [1, 1], [1, 2], [0, 0],
        [1, 0], [2, 1], [0, 0], [0, 0],
        [1, 0], [0, 0], [0, 0], [0, 0],
    ];

    let dense = new Map<number, number>();
    let dense_pos: number[] = [];
    let dense_triangles: number[] = [];
    for (let i = 0; i < triangles.length; i++) {
        let v = triangles[i];
        if (!dense.has(v)) {
            dense.set(v, dense.size);
            dense_pos.push(...vertex_data.slice(v * stride, v * stride + 3));
        }
        dense_triangles.push(dense.get(v)!);
    }
    let best_score = 1e20;
    let best_plane: Plane = { n: [0, 0, 0], d: 0 };
    let signs = new Array<number>(dense_pos.length / 3);
    for (let i = 0; i < triangles.length; i += 3) {
        let plane = triangle_plane(triangles.slice(i, i + 3) as any, vertex_data);
        let {n, d} = plane;
        for (let i = 0; i < dense.size; i++) {
            let val = dense_pos[i * 3] * n[0]
                    + dense_pos[i * 3 + 1] * n[1]
                    + dense_pos[i * 3 + 2] * n[2]
                    - d;
            if (val < -eps) {
                signs[i] = 4;
            } else if (val > eps) {
                signs[i] = 1;
            } else {
                signs[i] = 0;
            }
        }
        let num_neg_triangles = 0;
        let num_pos_triangles = 0;
        for (let i = 0; i < triangles.length; i += 3) {
            let s = signs[dense_triangles[i]]
                  + signs[dense_triangles[i + 1]]
                  + signs[dense_triangles[i + 2]];
            num_neg_triangles += table[s][0];
            num_pos_triangles += table[s][1];
        }
        let score = Math.pow(num_neg_triangles, 2) + Math.pow(num_pos_triangles, 2);
        if (score < best_score) {
            best_score = score;
            best_plane = plane;
        }
    }
    return best_plane;
}

export function cut_triangles(plane: Plane, vertices: number[], vertex_data: number[]) {
    const stride = 8;
    let { n, d } = plane;
    let neg_triangles: number[] = [];
    let pos_triangles: number[] = [];
    let plane_triangles: number[] = [];
    let edge_split_cache = new Map<string, number>();
    for (let i = 0; i < vertices.length; i += 3) {
        let vs = vertices.slice(i, i + 3);
        let vals = vs.map(v => vec3.dot(n, vertex_data.slice(stride * v, stride * v + 3)) - d);
        let has_neg = vals[0] < -eps || vals[1] < -eps || vals[2] < -eps;
        let has_pos = vals[0] > eps || vals[1] > eps || vals[2] > eps;
        if (has_neg) {
            if (has_pos) {
                let neg_vs = [];
                let pos_vs = [];

                for (let j = 0; j < 3; j++) {
                    let j1 = (j + 1) % 3;
                    if (vals[j] < -eps) {
                        neg_vs.push(vs[j]);
                    } else if (vals[j] > eps) {
                        pos_vs.push(vs[j]);
                    } else {
                        neg_vs.push(vs[j]);
                        pos_vs.push(vs[j]);
                    }
                    if (vals[j] < -eps && vals[j1] > eps || vals[j] > eps && vals[j1] < -eps) {
                        let key = `${Math.min(vs[j], vs[j1])}-${Math.max(vs[j], vs[j1])}`;
                        let v_idx = edge_split_cache.get(key);
                        if (v_idx === undefined) {
                            let t = vals[j] / (vals[j] - vals[j1]);
                            v_idx = vertex_data.length / stride;
                            for (let k = 0; k < stride; k++) {
                                vertex_data.push(
                                    vertex_data[vs[j] * stride + k] * (1 - t) +
                                    vertex_data[vs[j1] * stride + k] * t);
                            }
                            edge_split_cache.set(key, v_idx);
                        }
                        neg_vs.push(v_idx);
                        pos_vs.push(v_idx);
                    }
                }
                if (neg_vs.length == 3) {
                    neg_triangles.push(...neg_vs);
                } else if (neg_vs.length == 4) {
                    neg_triangles.push(neg_vs[0], neg_vs[1], neg_vs[2]);
                    neg_triangles.push(neg_vs[0], neg_vs[2], neg_vs[3]);
                } else {
                    assert(false);
                }
                if (pos_vs.length == 3) {
                    pos_triangles.push(...pos_vs);
                } else if (pos_vs.length == 4) {
                    pos_triangles.push(pos_vs[0], pos_vs[1], pos_vs[2]);
                    pos_triangles.push(pos_vs[0], pos_vs[2], pos_vs[3]);
                } else {
                    assert(false);
                }
            } else {
                neg_triangles.push(...vs);
            }
        } else {
            if (has_pos) {
                pos_triangles.push(...vs);
            } else {
                plane_triangles.push(...vs);
            }
        }
    }

    return {
        neg_triangles,
        pos_triangles,
        plane_triangles,
    };
}
