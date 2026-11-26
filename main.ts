// The World — Thursday 26 November 2026.
// Ships entry.png byte-for-byte to $MAKEFUN_OUTPUT_DIR.
// Guards: PNG magic, 1 MiB cap, IHDR must be 1024x1024.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const bytes = readFileSync(src);

// PNG signature: 89 50 4E 47 0D 0A 1A 0A
const MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length < 8 || !bytes.subarray(0, 8).equals(MAGIC)) {
  throw new Error("entry.png is not a PNG file");
}

// Size cap: 1 MiB.
if (bytes.length > 1024 * 1024) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}

// IHDR chunk: length (4) + "IHDR" (4) + width (4 BE) + height (4 BE).
const ihdrLen = bytes.readUInt32BE(8);
const ihdrType = bytes.toString("ascii", 12, 16);
if (ihdrType !== "IHDR" || ihdrLen !== 13) {
  throw new Error("entry.png has no valid IHDR chunk");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

// IEND trailer: the last 12 bytes must be length 0 + "IEND" + CRC.
if (bytes.length < 12) {
  throw new Error("entry.png is too short to hold an IEND chunk");
}
const iendLen = bytes.readUInt32BE(bytes.length - 12);
const iendType = bytes.toString("ascii", bytes.length - 8, bytes.length - 4);
if (iendLen !== 0 || iendType !== "IEND") {
  throw new Error("entry.png is missing its IEND trailer");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), bytes);
console.log(`wrote ${bytes.length} bytes to ${join(outDir, "entry.png")}`);
