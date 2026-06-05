import { PDFDocument, StandardFonts } from 'pdf-lib'

// Create a one-page A4 PDF with regular + bold fonts and a top cursor.
export async function pdfDoc() {
  const doc = await PDFDocument.create()
  const page = doc.addPage([595, 842])
  const font = await doc.embedFont(StandardFonts.Helvetica)
  const bold = await doc.embedFont(StandardFonts.HelveticaBold)

  return { doc, ctx: { page, font, bold, y: 790 } }
}
