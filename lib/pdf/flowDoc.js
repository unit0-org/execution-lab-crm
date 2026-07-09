import { PDFDocument } from 'pdf-lib'
import fontkit from '@pdf-lib/fontkit'
import { page, margin } from './pdfPage'
import { embedFonts } from './brandFonts'
import { embedLogo } from './brandLogo'

const top = page.height - margin

// A multi-page US-Letter document with brand fonts + logo embedded and a
// cursor at the top margin. Draw helpers advance and paginate `ctx`.
export async function createFlowDoc() {
  const doc = await PDFDocument.create()

  doc.registerFontkit(fontkit)

  const fonts = await embedFonts(doc)
  const logo = await embedLogo(doc)
  const sheet = doc.addPage([page.width, page.height])

  return { doc, ctx: { doc, page: sheet, fonts, logo, y: top, top } }
}
