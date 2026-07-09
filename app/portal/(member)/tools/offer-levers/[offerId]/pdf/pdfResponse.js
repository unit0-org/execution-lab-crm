import { offerPdfFileName } from './offerPdfFileName'

// Stream the offer PDF inline (viewable + downloadable) with a filename
// derived from the offer's name.
export function pdfResponse(name, pdf) {
  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${offerPdfFileName(name)}"`
    }
  })
}
