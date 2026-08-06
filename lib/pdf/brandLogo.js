import fs from 'fs'
import path from 'path'

const file = path.join(process.cwd(), 'lib/pdf/assets/logo-full.png')
let bytes = null

// Read once per process — every PDF in a batch embeds the same logo, and
// embedding never mutates the bytes.
const read = () => {
  if (!bytes) bytes = fs.readFileSync(file)

  return bytes
}

// Embed the brand logo (PNG). Shared by every branded PDF.
export function embedLogo(doc) {
  return doc.embedPng(read())
}
