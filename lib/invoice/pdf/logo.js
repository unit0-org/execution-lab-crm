import fs from 'fs'
import path from 'path'

const file = path.join(process.cwd(),
  'lib/invoice/pdf/assets/logo-full.png')

// Embed the brand logo (PNG) for the invoice header.
export function embedLogo(doc) {
  return doc.embedPng(fs.readFileSync(file))
}
