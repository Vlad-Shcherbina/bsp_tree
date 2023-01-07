import assert from "./assert.js";
import { vec3 } from "./vendor/gl-matrix.js";

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
    return { n, d };
}

export function cut_triangles(plane: Plane, vertices: number[], vertex_data: number[]) {
    const stride = 8;
    let { n, d } = plane;
    let eps = 1e-9;
    let neg_triangles: number[] = [];
    let pos_triangles: number[] = [];
    let plane_triangles: number[] = [];
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
                    }
                    if (vals[j] < -eps && vals[j1] > eps || vals[j] > eps && vals[j1] < -eps) {
                        let t = vals[j] / (vals[j] - vals[j1]);
                        let v_idx = vertex_data.length / stride;
                        neg_vs.push(v_idx);
                        pos_vs.push(v_idx);
                        for (let k = 0; k < stride; k++) {
                            vertex_data.push(
                                vertex_data[vs[j] * stride + k] * (1 - t) +
                                vertex_data[vs[j1] * stride + k] * t);
                        }
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
