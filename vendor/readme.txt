git clone git@github.com:toji/gl-matrix.git
cd gl-matrix
git checkout v3.4.1
rollup src/index.js --format esm --file gl-matrix.js
# This is a hack to remove comments.
# That's because comments include JSDoc type annotations.
# Unfortunately, type names like "mat4" collide with submodule names.
# So tsc gets confused by this.
# I tried to find a workaround! But in the end decided screw it,
# I'll just remove comments and have "any" everywhere.
tsc --allowJs --removeComments --module es6 --outDir tmp gl-matrix.js
tsc --allowJs --declaration --emitDeclarationOnly --esModuleInterop --target ESNext tmp/gl-matrix.js

Then grab
    tmp/gl-matrix.js
    tmp/gl-matrix.d.ts
