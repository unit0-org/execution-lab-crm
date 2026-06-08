import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import { page } from '@/lib/pdf/pdfPage'
import { embedFonts } from './fonts'
import { embedLogo } from './logo'

// One US-Letter PDF with embedded brand fonts + logo; cursor at the top.
export async function pdfDoc() {
  const doc = await PDFDocument.create()

  doc.registerFontkit(fontkit)

  const sheet = doc.addPage([page.width, page.height])
  const fonts = await embedFonts(doc)
  const logo = await embedLogo(doc)

  return { doc, ctx: { page: sheet, fonts, logo, y: page.height - 64 } }
}
