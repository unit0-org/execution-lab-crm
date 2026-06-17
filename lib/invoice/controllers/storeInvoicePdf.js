import { buildInvoicePdf } from './buildInvoicePdf'
import { archiveInvoicePdf } from './archiveInvoicePdf'

// Render the invoice PDF and file it on Drive, best-effort. A PDF-render or
// Drive failure must not block approval, so it degrades to nulls.
export async function storeInvoicePdf(invoice) {
  try {
    const pdf = await buildInvoicePdf(invoice.id)

    return await archiveInvoicePdf(invoice, pdf)
  } catch {
    return { url: null, fileId: null }
  }
}
