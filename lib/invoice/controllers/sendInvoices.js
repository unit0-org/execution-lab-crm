import { sendInvoice } from './sendInvoice'

// Send many invoices; report how many succeeded and how many failed.
export async function sendInvoices(ids) {
  const results = await Promise.all(ids.map((id) => sendInvoice(id)))
  const failed = results.filter((r) => r && r.error)

  return { sent: results.length - failed.length, failed: failed.length }
}
