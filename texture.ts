export function build_texture(width: number, height: number): number[] {
    let tex = new Array<number>(width * height * 4);
    let n = 500;
    let spot = new Array<{ p: [number, number], r: number, color: [number, number, number] }>(n);
    for (let i = 0; i < n; i++) {
        spot[i] = {
            p: [Math.random(), Math.random()],
            r: 0.4 * Math.random(),
            color: [Math.random(), Math.random(), Math.random()],
        };
    }
    for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {
            let w = [i / width, j / height];
            let c = [0, 0, 0];
            let weight = 0;
            for (let k = 0; k < n; k++) {
                let p = [Math.sin(12 * Math.PI * (spot[k].p[0] - w[0])), Math.sin(2 * Math.PI * (spot[k].p[1] - w[1]))];
                let d = (p[0] * p[0] + p[1] * p[1]) / (spot[k].r * spot[k].r);
                d = 1 - d;
                if (d < 1e-3) d = 1e-3;
                c[0] += spot[k].color[0] * d;
                c[1] += spot[k].color[1] * d;
                c[2] += spot[k].color[2] * d;
                weight += d;
            }
            c[0] /= weight;
            c[1] /= weight;
            c[2] /= weight;
            c[0] *= 0.5 * (1 + Math.sin(2 * Math.PI * j / height));
            c[1] *= 0.5 * (1 + Math.sin(2 * Math.PI * i / width));
            c[2] *= 0.5 * (1 + Math.sin(4 * Math.PI * j / height));
            tex[(i + width * j) * 4] = 255 * c[0];
            tex[(i + width * j) * 4 + 1] = 255 * c[1];
            tex[(i + width * j) * 4 + 2] = 255 * c[2];
            tex[(i + width * j) * 4 + 3] = 255;
        }
    }
    return tex;
}
