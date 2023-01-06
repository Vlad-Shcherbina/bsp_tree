declare var common: Readonly<{
    __proto__: any;
    EPSILON: number;
    readonly ARRAY_TYPE: ArrayConstructor | Float32ArrayConstructor;
    RANDOM: () => number;
    ANGLE_ORDER: string;
    setMatrixArrayType: typeof setMatrixArrayType;
    toRadian: typeof toRadian;
    equals: typeof equals;
}>;
export var mat2: Readonly<{
    __proto__: any;
    create: typeof create;
    clone: typeof clone;
    copy: typeof copy;
    identity: typeof identity;
    fromValues: typeof fromValues;
    set: typeof set;
    transpose: typeof transpose;
    invert: typeof invert;
    adjoint: typeof adjoint;
    determinant: typeof determinant;
    multiply: typeof multiply;
    rotate: typeof rotate;
    scale: typeof scale;
    fromRotation: typeof fromRotation;
    fromScaling: typeof fromScaling;
    str: typeof str;
    frob: typeof frob;
    LDU: typeof LDU;
    add: typeof add;
    subtract: typeof subtract;
    exactEquals: typeof exactEquals;
    equals: typeof equals$1;
    multiplyScalar: typeof multiplyScalar;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd;
    mul: typeof multiply;
    sub: typeof subtract;
}>;
export var mat2d: Readonly<{
    __proto__: any;
    create: typeof create$1;
    clone: typeof clone$1;
    copy: typeof copy$1;
    identity: typeof identity$1;
    fromValues: typeof fromValues$1;
    set: typeof set$1;
    invert: typeof invert$1;
    determinant: typeof determinant$1;
    multiply: typeof multiply$1;
    rotate: typeof rotate$1;
    scale: typeof scale$1;
    translate: typeof translate;
    fromRotation: typeof fromRotation$1;
    fromScaling: typeof fromScaling$1;
    fromTranslation: typeof fromTranslation;
    str: typeof str$1;
    frob: typeof frob$1;
    add: typeof add$1;
    subtract: typeof subtract$1;
    multiplyScalar: typeof multiplyScalar$1;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$1;
    exactEquals: typeof exactEquals$1;
    equals: typeof equals$2;
    mul: typeof multiply$1;
    sub: typeof subtract$1;
}>;
export var mat3: Readonly<{
    __proto__: any;
    create: typeof create$2;
    fromMat4: typeof fromMat4;
    clone: typeof clone$2;
    copy: typeof copy$2;
    fromValues: typeof fromValues$2;
    set: typeof set$2;
    identity: typeof identity$2;
    transpose: typeof transpose$1;
    invert: typeof invert$2;
    adjoint: typeof adjoint$1;
    determinant: typeof determinant$2;
    multiply: typeof multiply$2;
    translate: typeof translate$1;
    rotate: typeof rotate$2;
    scale: typeof scale$2;
    fromTranslation: typeof fromTranslation$1;
    fromRotation: typeof fromRotation$2;
    fromScaling: typeof fromScaling$2;
    fromMat2d: typeof fromMat2d;
    fromQuat: typeof fromQuat;
    normalFromMat4: typeof normalFromMat4;
    projection: typeof projection;
    str: typeof str$2;
    frob: typeof frob$2;
    add: typeof add$2;
    subtract: typeof subtract$2;
    multiplyScalar: typeof multiplyScalar$2;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$2;
    exactEquals: typeof exactEquals$2;
    equals: typeof equals$3;
    mul: typeof multiply$2;
    sub: typeof subtract$2;
}>;
export var mat4: Readonly<{
    __proto__: any;
    create: typeof create$3;
    clone: typeof clone$3;
    copy: typeof copy$3;
    fromValues: typeof fromValues$3;
    set: typeof set$3;
    identity: typeof identity$3;
    transpose: typeof transpose$2;
    invert: typeof invert$3;
    adjoint: typeof adjoint$2;
    determinant: typeof determinant$3;
    multiply: typeof multiply$3;
    translate: typeof translate$2;
    scale: typeof scale$3;
    rotate: typeof rotate$3;
    rotateX: typeof rotateX;
    rotateY: typeof rotateY;
    rotateZ: typeof rotateZ;
    fromTranslation: typeof fromTranslation$2;
    fromScaling: typeof fromScaling$3;
    fromRotation: typeof fromRotation$3;
    fromXRotation: typeof fromXRotation;
    fromYRotation: typeof fromYRotation;
    fromZRotation: typeof fromZRotation;
    fromRotationTranslation: typeof fromRotationTranslation;
    fromQuat2: typeof fromQuat2;
    getTranslation: typeof getTranslation;
    getScaling: typeof getScaling;
    getRotation: typeof getRotation;
    decompose: typeof decompose;
    fromRotationTranslationScale: typeof fromRotationTranslationScale;
    fromRotationTranslationScaleOrigin: typeof fromRotationTranslationScaleOrigin;
    fromQuat: typeof fromQuat$1;
    frustum: typeof frustum;
    perspectiveNO: typeof perspectiveNO;
    perspective: typeof perspectiveNO;
    perspectiveZO: typeof perspectiveZO;
    perspectiveFromFieldOfView: typeof perspectiveFromFieldOfView;
    orthoNO: typeof orthoNO;
    ortho: typeof orthoNO;
    orthoZO: typeof orthoZO;
    lookAt: typeof lookAt;
    targetTo: typeof targetTo;
    str: typeof str$3;
    frob: typeof frob$3;
    add: typeof add$3;
    subtract: typeof subtract$3;
    multiplyScalar: typeof multiplyScalar$3;
    multiplyScalarAndAdd: typeof multiplyScalarAndAdd$3;
    exactEquals: typeof exactEquals$3;
    equals: typeof equals$4;
    mul: typeof multiply$3;
    sub: typeof subtract$3;
}>;
export var quat: Readonly<{
    __proto__: any;
    create: typeof create$6;
    identity: typeof identity$4;
    setAxisAngle: typeof setAxisAngle;
    getAxisAngle: typeof getAxisAngle;
    getAngle: typeof getAngle;
    multiply: typeof multiply$6;
    rotateX: typeof rotateX$2;
    rotateY: typeof rotateY$2;
    rotateZ: typeof rotateZ$2;
    calculateW: typeof calculateW;
    exp: typeof exp;
    ln: typeof ln;
    pow: typeof pow;
    slerp: typeof slerp$1;
    random: typeof random$2;
    invert: typeof invert$4;
    conjugate: typeof conjugate;
    fromMat3: typeof fromMat3;
    fromEuler: typeof fromEuler;
    str: typeof str$6;
    clone: typeof clone$5;
    fromValues: typeof fromValues$5;
    copy: typeof copy$5;
    set: typeof set$5;
    add: typeof add$5;
    mul: typeof multiply$6;
    scale: typeof scale$5;
    dot: typeof dot$1;
    lerp: typeof lerp$1;
    length: typeof length$1;
    len: typeof length$1;
    squaredLength: typeof squaredLength$1;
    sqrLen: typeof squaredLength$1;
    normalize: typeof normalize$1;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$7;
    rotationTo: (out: any, a: any, b: any) => any;
    sqlerp: (out: any, a: any, b: any, c: any, d: any, t: any) => any;
    setAxes: (out: any, view: any, right: any, up: any) => any;
}>;
export var quat2: Readonly<{
    __proto__: any;
    create: typeof create$7;
    clone: typeof clone$7;
    fromValues: typeof fromValues$7;
    fromRotationTranslationValues: typeof fromRotationTranslationValues;
    fromRotationTranslation: typeof fromRotationTranslation$1;
    fromTranslation: typeof fromTranslation$3;
    fromRotation: typeof fromRotation$4;
    fromMat4: typeof fromMat4$1;
    copy: typeof copy$7;
    identity: typeof identity$5;
    set: typeof set$7;
    getReal: typeof copy$5;
    getDual: typeof getDual;
    setReal: typeof copy$5;
    setDual: typeof setDual;
    getTranslation: typeof getTranslation$1;
    translate: typeof translate$3;
    rotateX: typeof rotateX$3;
    rotateY: typeof rotateY$3;
    rotateZ: typeof rotateZ$3;
    rotateByQuatAppend: typeof rotateByQuatAppend;
    rotateByQuatPrepend: typeof rotateByQuatPrepend;
    rotateAroundAxis: typeof rotateAroundAxis;
    add: typeof add$7;
    multiply: typeof multiply$7;
    mul: typeof multiply$7;
    scale: typeof scale$7;
    dot: typeof dot$1;
    lerp: typeof lerp$3;
    invert: typeof invert$5;
    conjugate: typeof conjugate$1;
    length: typeof length$1;
    len: typeof length$1;
    squaredLength: typeof squaredLength$1;
    sqrLen: typeof squaredLength$1;
    normalize: typeof normalize$3;
    str: typeof str$7;
    exactEquals: typeof exactEquals$7;
    equals: typeof equals$8;
}>;
export var vec2: Readonly<{
    __proto__: any;
    create: typeof create$8;
    clone: typeof clone$8;
    fromValues: typeof fromValues$8;
    copy: typeof copy$8;
    set: typeof set$8;
    add: typeof add$8;
    subtract: typeof subtract$6;
    multiply: typeof multiply$8;
    divide: typeof divide$2;
    ceil: typeof ceil$2;
    floor: typeof floor$2;
    min: typeof min$2;
    max: typeof max$2;
    round: typeof round$2;
    scale: typeof scale$8;
    scaleAndAdd: typeof scaleAndAdd$2;
    distance: typeof distance$2;
    squaredDistance: typeof squaredDistance$2;
    length: typeof length$4;
    squaredLength: typeof squaredLength$4;
    negate: typeof negate$2;
    inverse: typeof inverse$2;
    normalize: typeof normalize$4;
    dot: typeof dot$4;
    cross: typeof cross$2;
    lerp: typeof lerp$4;
    random: typeof random$3;
    transformMat2: typeof transformMat2;
    transformMat2d: typeof transformMat2d;
    transformMat3: typeof transformMat3$1;
    transformMat4: typeof transformMat4$2;
    rotate: typeof rotate$4;
    angle: typeof angle$1;
    zero: typeof zero$2;
    str: typeof str$8;
    exactEquals: typeof exactEquals$8;
    equals: typeof equals$9;
    len: typeof length$4;
    sub: typeof subtract$6;
    mul: typeof multiply$8;
    div: typeof divide$2;
    dist: typeof distance$2;
    sqrDist: typeof squaredDistance$2;
    sqrLen: typeof squaredLength$4;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
export var vec3: Readonly<{
    __proto__: any;
    create: typeof create$4;
    clone: typeof clone$4;
    length: typeof length;
    fromValues: typeof fromValues$4;
    copy: typeof copy$4;
    set: typeof set$4;
    add: typeof add$4;
    subtract: typeof subtract$4;
    multiply: typeof multiply$4;
    divide: typeof divide;
    ceil: typeof ceil;
    floor: typeof floor;
    min: typeof min;
    max: typeof max;
    round: typeof round;
    scale: typeof scale$4;
    scaleAndAdd: typeof scaleAndAdd;
    distance: typeof distance;
    squaredDistance: typeof squaredDistance;
    squaredLength: typeof squaredLength;
    negate: typeof negate;
    inverse: typeof inverse;
    normalize: typeof normalize;
    dot: typeof dot;
    cross: typeof cross;
    lerp: typeof lerp;
    slerp: typeof slerp;
    hermite: typeof hermite;
    bezier: typeof bezier;
    random: typeof random;
    transformMat4: typeof transformMat4;
    transformMat3: typeof transformMat3;
    transformQuat: typeof transformQuat;
    rotateX: typeof rotateX$1;
    rotateY: typeof rotateY$1;
    rotateZ: typeof rotateZ$1;
    angle: typeof angle;
    zero: typeof zero;
    str: typeof str$4;
    exactEquals: typeof exactEquals$4;
    equals: typeof equals$5;
    sub: typeof subtract$4;
    mul: typeof multiply$4;
    div: typeof divide;
    dist: typeof distance;
    sqrDist: typeof squaredDistance;
    len: typeof length;
    sqrLen: typeof squaredLength;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
export var vec4: Readonly<{
    __proto__: any;
    create: typeof create$5;
    clone: typeof clone$5;
    fromValues: typeof fromValues$5;
    copy: typeof copy$5;
    set: typeof set$5;
    add: typeof add$5;
    subtract: typeof subtract$5;
    multiply: typeof multiply$5;
    divide: typeof divide$1;
    ceil: typeof ceil$1;
    floor: typeof floor$1;
    min: typeof min$1;
    max: typeof max$1;
    round: typeof round$1;
    scale: typeof scale$5;
    scaleAndAdd: typeof scaleAndAdd$1;
    distance: typeof distance$1;
    squaredDistance: typeof squaredDistance$1;
    length: typeof length$1;
    squaredLength: typeof squaredLength$1;
    negate: typeof negate$1;
    inverse: typeof inverse$1;
    normalize: typeof normalize$1;
    dot: typeof dot$1;
    cross: typeof cross$1;
    lerp: typeof lerp$1;
    random: typeof random$1;
    transformMat4: typeof transformMat4$1;
    transformQuat: typeof transformQuat$1;
    zero: typeof zero$1;
    str: typeof str$5;
    exactEquals: typeof exactEquals$5;
    equals: typeof equals$6;
    sub: typeof subtract$5;
    mul: typeof multiply$5;
    div: typeof divide$1;
    dist: typeof distance$1;
    sqrDist: typeof squaredDistance$1;
    len: typeof length$1;
    sqrLen: typeof squaredLength$1;
    forEach: (a: any, stride: any, offset: any, count: any, fn: any, arg: any) => any;
}>;
declare function setMatrixArrayType(type: any): void;
declare function toRadian(a: any): number;
declare function equals(a: any, b: any): boolean;
declare function create(): any[] | Float32Array;
declare function clone(a: any): any[] | Float32Array;
declare function copy(out: any, a: any): any;
declare function identity(out: any): any;
declare function fromValues(m00: any, m01: any, m10: any, m11: any): any[] | Float32Array;
declare function set(out: any, m00: any, m01: any, m10: any, m11: any): any;
declare function transpose(out: any, a: any): any;
declare function invert(out: any, a: any): any;
declare function adjoint(out: any, a: any): any;
declare function determinant(a: any): number;
declare function multiply(out: any, a: any, b: any): any;
declare function rotate(out: any, a: any, rad: any): any;
declare function scale(out: any, a: any, v: any): any;
declare function fromRotation(out: any, rad: any): any;
declare function fromScaling(out: any, v: any): any;
declare function str(a: any): string;
declare function frob(a: any): number;
declare function LDU(L: any, D: any, U: any, a: any): any[];
declare function add(out: any, a: any, b: any): any;
declare function subtract(out: any, a: any, b: any): any;
declare function exactEquals(a: any, b: any): boolean;
declare function equals$1(a: any, b: any): boolean;
declare function multiplyScalar(out: any, a: any, b: any): any;
declare function multiplyScalarAndAdd(out: any, a: any, b: any, scale: any): any;
declare function create$1(): any[] | Float32Array;
declare function clone$1(a: any): any[] | Float32Array;
declare function copy$1(out: any, a: any): any;
declare function identity$1(out: any): any;
declare function fromValues$1(a: any, b: any, c: any, d: any, tx: any, ty: any): any[] | Float32Array;
declare function set$1(out: any, a: any, b: any, c: any, d: any, tx: any, ty: any): any;
declare function invert$1(out: any, a: any): any;
declare function determinant$1(a: any): number;
declare function multiply$1(out: any, a: any, b: any): any;
declare function rotate$1(out: any, a: any, rad: any): any;
declare function scale$1(out: any, a: any, v: any): any;
declare function translate(out: any, a: any, v: any): any;
declare function fromRotation$1(out: any, rad: any): any;
declare function fromScaling$1(out: any, v: any): any;
declare function fromTranslation(out: any, v: any): any;
declare function str$1(a: any): string;
declare function frob$1(a: any): number;
declare function add$1(out: any, a: any, b: any): any;
declare function subtract$1(out: any, a: any, b: any): any;
declare function multiplyScalar$1(out: any, a: any, b: any): any;
declare function multiplyScalarAndAdd$1(out: any, a: any, b: any, scale: any): any;
declare function exactEquals$1(a: any, b: any): boolean;
declare function equals$2(a: any, b: any): boolean;
declare function create$2(): any[] | Float32Array;
declare function fromMat4(out: any, a: any): any;
declare function clone$2(a: any): any[] | Float32Array;
declare function copy$2(out: any, a: any): any;
declare function fromValues$2(m00: any, m01: any, m02: any, m10: any, m11: any, m12: any, m20: any, m21: any, m22: any): any[] | Float32Array;
declare function set$2(out: any, m00: any, m01: any, m02: any, m10: any, m11: any, m12: any, m20: any, m21: any, m22: any): any;
declare function identity$2(out: any): any;
declare function transpose$1(out: any, a: any): any;
declare function invert$2(out: any, a: any): any;
declare function adjoint$1(out: any, a: any): any;
declare function determinant$2(a: any): number;
declare function multiply$2(out: any, a: any, b: any): any;
declare function translate$1(out: any, a: any, v: any): any;
declare function rotate$2(out: any, a: any, rad: any): any;
declare function scale$2(out: any, a: any, v: any): any;
declare function fromTranslation$1(out: any, v: any): any;
declare function fromRotation$2(out: any, rad: any): any;
declare function fromScaling$2(out: any, v: any): any;
declare function fromMat2d(out: any, a: any): any;
declare function fromQuat(out: any, q: any): any;
declare function normalFromMat4(out: any, a: any): any;
declare function projection(out: any, width: any, height: any): any;
declare function str$2(a: any): string;
declare function frob$2(a: any): number;
declare function add$2(out: any, a: any, b: any): any;
declare function subtract$2(out: any, a: any, b: any): any;
declare function multiplyScalar$2(out: any, a: any, b: any): any;
declare function multiplyScalarAndAdd$2(out: any, a: any, b: any, scale: any): any;
declare function exactEquals$2(a: any, b: any): boolean;
declare function equals$3(a: any, b: any): boolean;
declare function create$3(): any[] | Float32Array;
declare function clone$3(a: any): any[] | Float32Array;
declare function copy$3(out: any, a: any): any;
declare function fromValues$3(m00: any, m01: any, m02: any, m03: any, m10: any, m11: any, m12: any, m13: any, m20: any, m21: any, m22: any, m23: any, m30: any, m31: any, m32: any, m33: any): any[] | Float32Array;
declare function set$3(out: any, m00: any, m01: any, m02: any, m03: any, m10: any, m11: any, m12: any, m13: any, m20: any, m21: any, m22: any, m23: any, m30: any, m31: any, m32: any, m33: any): any;
declare function identity$3(out: any): any;
declare function transpose$2(out: any, a: any): any;
declare function invert$3(out: any, a: any): any;
declare function adjoint$2(out: any, a: any): any;
declare function determinant$3(a: any): number;
declare function multiply$3(out: any, a: any, b: any): any;
declare function translate$2(out: any, a: any, v: any): any;
declare function scale$3(out: any, a: any, v: any): any;
declare function rotate$3(out: any, a: any, rad: any, axis: any): any;
declare function rotateX(out: any, a: any, rad: any): any;
declare function rotateY(out: any, a: any, rad: any): any;
declare function rotateZ(out: any, a: any, rad: any): any;
declare function fromTranslation$2(out: any, v: any): any;
declare function fromScaling$3(out: any, v: any): any;
declare function fromRotation$3(out: any, rad: any, axis: any): any;
declare function fromXRotation(out: any, rad: any): any;
declare function fromYRotation(out: any, rad: any): any;
declare function fromZRotation(out: any, rad: any): any;
declare function fromRotationTranslation(out: any, q: any, v: any): any;
declare function fromQuat2(out: any, a: any): any;
declare function getTranslation(out: any, mat: any): any;
declare function getScaling(out: any, mat: any): any;
declare function getRotation(out: any, mat: any): any;
declare function decompose(out_r: any, out_t: any, out_s: any, mat: any): any;
declare function fromRotationTranslationScale(out: any, q: any, v: any, s: any): any;
declare function fromRotationTranslationScaleOrigin(out: any, q: any, v: any, s: any, o: any): any;
declare function fromQuat$1(out: any, q: any): any;
declare function frustum(out: any, left: any, right: any, bottom: any, top: any, near: any, far: any): any;
declare function perspectiveNO(out: any, fovy: any, aspect: any, near: any, far: any): any;
declare function perspectiveZO(out: any, fovy: any, aspect: any, near: any, far: any): any;
declare function perspectiveFromFieldOfView(out: any, fov: any, near: any, far: any): any;
declare function orthoNO(out: any, left: any, right: any, bottom: any, top: any, near: any, far: any): any;
declare function orthoZO(out: any, left: any, right: any, bottom: any, top: any, near: any, far: any): any;
declare function lookAt(out: any, eye: any, center: any, up: any): any;
declare function targetTo(out: any, eye: any, target: any, up: any): any;
declare function str$3(a: any): string;
declare function frob$3(a: any): number;
declare function add$3(out: any, a: any, b: any): any;
declare function subtract$3(out: any, a: any, b: any): any;
declare function multiplyScalar$3(out: any, a: any, b: any): any;
declare function multiplyScalarAndAdd$3(out: any, a: any, b: any, scale: any): any;
declare function exactEquals$3(a: any, b: any): boolean;
declare function equals$4(a: any, b: any): boolean;
declare function create$6(): any[] | Float32Array;
declare function identity$4(out: any): any;
declare function setAxisAngle(out: any, axis: any, rad: any): any;
declare function getAxisAngle(out_axis: any, q: any): number;
declare function getAngle(a: any, b: any): number;
declare function multiply$6(out: any, a: any, b: any): any;
declare function rotateX$2(out: any, a: any, rad: any): any;
declare function rotateY$2(out: any, a: any, rad: any): any;
declare function rotateZ$2(out: any, a: any, rad: any): any;
declare function calculateW(out: any, a: any): any;
declare function exp(out: any, a: any): any;
declare function ln(out: any, a: any): any;
declare function pow(out: any, a: any, b: any): any;
declare function slerp$1(out: any, a: any, b: any, t: any): any;
declare function random$2(out: any): any;
declare function invert$4(out: any, a: any): any;
declare function conjugate(out: any, a: any): any;
declare function fromMat3(out: any, m: any): any;
declare function fromEuler(out: any, x: any, y: any, z: any, order: any): any;
declare function str$6(a: any): string;
declare function clone$5(a: any): any[] | Float32Array;
declare function fromValues$5(x: any, y: any, z: any, w: any): any[] | Float32Array;
declare function copy$5(out: any, a: any): any;
declare function set$5(out: any, x: any, y: any, z: any, w: any): any;
declare function add$5(out: any, a: any, b: any): any;
declare function scale$5(out: any, a: any, b: any): any;
declare function dot$1(a: any, b: any): number;
declare function lerp$1(out: any, a: any, b: any, t: any): any;
declare function length$1(a: any): number;
declare function squaredLength$1(a: any): number;
declare function normalize$1(out: any, a: any): any;
declare function exactEquals$5(a: any, b: any): boolean;
declare function equals$7(a: any, b: any): boolean;
declare function create$7(): any[] | Float32Array;
declare function clone$7(a: any): any[] | Float32Array;
declare function fromValues$7(x1: any, y1: any, z1: any, w1: any, x2: any, y2: any, z2: any, w2: any): any[] | Float32Array;
declare function fromRotationTranslationValues(x1: any, y1: any, z1: any, w1: any, x2: any, y2: any, z2: any): any[] | Float32Array;
declare function fromRotationTranslation$1(out: any, q: any, t: any): any;
declare function fromTranslation$3(out: any, t: any): any;
declare function fromRotation$4(out: any, q: any): any;
declare function fromMat4$1(out: any, a: any): any;
declare function copy$7(out: any, a: any): any;
declare function identity$5(out: any): any;
declare function set$7(out: any, x1: any, y1: any, z1: any, w1: any, x2: any, y2: any, z2: any, w2: any): any;
declare function getDual(out: any, a: any): any;
declare function setDual(out: any, q: any): any;
declare function getTranslation$1(out: any, a: any): any;
declare function translate$3(out: any, a: any, v: any): any;
declare function rotateX$3(out: any, a: any, rad: any): any;
declare function rotateY$3(out: any, a: any, rad: any): any;
declare function rotateZ$3(out: any, a: any, rad: any): any;
declare function rotateByQuatAppend(out: any, a: any, q: any): any;
declare function rotateByQuatPrepend(out: any, q: any, a: any): any;
declare function rotateAroundAxis(out: any, a: any, axis: any, rad: any): any;
declare function add$7(out: any, a: any, b: any): any;
declare function multiply$7(out: any, a: any, b: any): any;
declare function scale$7(out: any, a: any, b: any): any;
declare function lerp$3(out: any, a: any, b: any, t: any): any;
declare function invert$5(out: any, a: any): any;
declare function conjugate$1(out: any, a: any): any;
declare function normalize$3(out: any, a: any): any;
declare function str$7(a: any): string;
declare function exactEquals$7(a: any, b: any): boolean;
declare function equals$8(a: any, b: any): boolean;
declare function create$8(): any[] | Float32Array;
declare function clone$8(a: any): any[] | Float32Array;
declare function fromValues$8(x: any, y: any): any[] | Float32Array;
declare function copy$8(out: any, a: any): any;
declare function set$8(out: any, x: any, y: any): any;
declare function add$8(out: any, a: any, b: any): any;
declare function subtract$6(out: any, a: any, b: any): any;
declare function multiply$8(out: any, a: any, b: any): any;
declare function divide$2(out: any, a: any, b: any): any;
declare function ceil$2(out: any, a: any): any;
declare function floor$2(out: any, a: any): any;
declare function min$2(out: any, a: any, b: any): any;
declare function max$2(out: any, a: any, b: any): any;
declare function round$2(out: any, a: any): any;
declare function scale$8(out: any, a: any, b: any): any;
declare function scaleAndAdd$2(out: any, a: any, b: any, scale: any): any;
declare function distance$2(a: any, b: any): number;
declare function squaredDistance$2(a: any, b: any): number;
declare function length$4(a: any): number;
declare function squaredLength$4(a: any): number;
declare function negate$2(out: any, a: any): any;
declare function inverse$2(out: any, a: any): any;
declare function normalize$4(out: any, a: any): any;
declare function dot$4(a: any, b: any): number;
declare function cross$2(out: any, a: any, b: any): any;
declare function lerp$4(out: any, a: any, b: any, t: any): any;
declare function random$3(out: any, scale: any): any;
declare function transformMat2(out: any, a: any, m: any): any;
declare function transformMat2d(out: any, a: any, m: any): any;
declare function transformMat3$1(out: any, a: any, m: any): any;
declare function transformMat4$2(out: any, a: any, m: any): any;
declare function rotate$4(out: any, a: any, b: any, rad: any): any;
declare function angle$1(a: any, b: any): number;
declare function zero$2(out: any): any;
declare function str$8(a: any): string;
declare function exactEquals$8(a: any, b: any): boolean;
declare function equals$9(a: any, b: any): boolean;
declare function create$4(): any[] | Float32Array;
declare function clone$4(a: any): any[] | Float32Array;
declare function length(a: any): number;
declare function fromValues$4(x: any, y: any, z: any): any[] | Float32Array;
declare function copy$4(out: any, a: any): any;
declare function set$4(out: any, x: any, y: any, z: any): any;
declare function add$4(out: any, a: any, b: any): any;
declare function subtract$4(out: any, a: any, b: any): any;
declare function multiply$4(out: any, a: any, b: any): any;
declare function divide(out: any, a: any, b: any): any;
declare function ceil(out: any, a: any): any;
declare function floor(out: any, a: any): any;
declare function min(out: any, a: any, b: any): any;
declare function max(out: any, a: any, b: any): any;
declare function round(out: any, a: any): any;
declare function scale$4(out: any, a: any, b: any): any;
declare function scaleAndAdd(out: any, a: any, b: any, scale: any): any;
declare function distance(a: any, b: any): number;
declare function squaredDistance(a: any, b: any): number;
declare function squaredLength(a: any): number;
declare function negate(out: any, a: any): any;
declare function inverse(out: any, a: any): any;
declare function normalize(out: any, a: any): any;
declare function dot(a: any, b: any): number;
declare function cross(out: any, a: any, b: any): any;
declare function lerp(out: any, a: any, b: any, t: any): any;
declare function slerp(out: any, a: any, b: any, t: any): any;
declare function hermite(out: any, a: any, b: any, c: any, d: any, t: any): any;
declare function bezier(out: any, a: any, b: any, c: any, d: any, t: any): any;
declare function random(out: any, scale: any): any;
declare function transformMat4(out: any, a: any, m: any): any;
declare function transformMat3(out: any, a: any, m: any): any;
declare function transformQuat(out: any, a: any, q: any): any;
declare function rotateX$1(out: any, a: any, b: any, rad: any): any;
declare function rotateY$1(out: any, a: any, b: any, rad: any): any;
declare function rotateZ$1(out: any, a: any, b: any, rad: any): any;
declare function angle(a: any, b: any): number;
declare function zero(out: any): any;
declare function str$4(a: any): string;
declare function exactEquals$4(a: any, b: any): boolean;
declare function equals$5(a: any, b: any): boolean;
declare function create$5(): any[] | Float32Array;
declare function subtract$5(out: any, a: any, b: any): any;
declare function multiply$5(out: any, a: any, b: any): any;
declare function divide$1(out: any, a: any, b: any): any;
declare function ceil$1(out: any, a: any): any;
declare function floor$1(out: any, a: any): any;
declare function min$1(out: any, a: any, b: any): any;
declare function max$1(out: any, a: any, b: any): any;
declare function round$1(out: any, a: any): any;
declare function scaleAndAdd$1(out: any, a: any, b: any, scale: any): any;
declare function distance$1(a: any, b: any): number;
declare function squaredDistance$1(a: any, b: any): number;
declare function negate$1(out: any, a: any): any;
declare function inverse$1(out: any, a: any): any;
declare function cross$1(out: any, u: any, v: any, w: any): any;
declare function random$1(out: any, scale: any): any;
declare function transformMat4$1(out: any, a: any, m: any): any;
declare function transformQuat$1(out: any, a: any, q: any): any;
declare function zero$1(out: any): any;
declare function str$5(a: any): string;
declare function equals$6(a: any, b: any): boolean;
export { common as glMatrix };
