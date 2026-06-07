import fs from 'fs'
import path from 'path'
import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'

const dir = path.join(process.cwd(), 'lib/invoice/pdf/fonts')
const read = (name) => fs.readFileSync(path.join(dir, name))

// One-page A4 PDF with embedded JetBrains Mono (regular + bold), subset.
export async function pdfDoc() {
  const doc = await PDFDocument.create()

  doc.registerFontkit(fontkit)

  const page = doc.addPage([595, 842])
  const font = await doc.embedFont(read('JetBrainsMono-Regular.ttf'),
    { subset: true })
  const bold = await doc.embedFont(read('JetBrainsMono-Bold.ttf'),
    { subset: true })

  return { doc, ctx: { page, font, bold, y: 790 } }
}
