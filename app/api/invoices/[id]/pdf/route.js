import { buildInvoicePdf } from '@/lib/invoice/controllers/buildInvoicePdf'

export const runtime = 'nodejs'

const headers = (id) => ({
  'Content-Type': 'application/pdf',
  'Content-Disposition': `inline; filename="${id}.pdf"`
})

// Stream an invoice's PDF for viewing/downloading in the browser.
export async function GET(request, { params }) {
  const { id } = await params
  const pdf = await buildInvoicePdf(id)

  return new Response(pdf, { headers: headers(id) })
}
