import fs from 'fs'
import path from 'path'

const file = path.join(process.cwd(), 'lib/pdf/assets/logo-full.png')

// Embed the brand logo (PNG). Shared by every branded PDF.
export function embedLogo(doc) {
  return doc.embedPng(fs.readFileSync(file))
}
