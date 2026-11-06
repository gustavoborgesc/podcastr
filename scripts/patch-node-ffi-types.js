/**
 * @types/node 26 declares node:ffi with `const` type parameters (TypeScript 5.0+).
 * This repo stays on TypeScript 4.9, whose parser rejects that syntax even with
 * skipLibCheck. Dropping the modifier keeps the signatures valid and does not
 * change runtime behavior; the app does not call node:ffi.
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "node_modules", "@types", "node", "ffi.d.ts");

if (!fs.existsSync(file)) {
    process.exit(0);
}

const original = fs.readFileSync(file, "utf8");
const patched = original.replace(/<const /g, "<");

if (patched !== original) {
    fs.writeFileSync(file, patched);
}
