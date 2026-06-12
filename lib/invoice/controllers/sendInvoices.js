import { sendInvoice } from './sendInvoice'

const editOf = (item) => (item.subject == null ? undefined : item)

// Send many invoices; each item is { id } or an edited message with
// { id, to, cc, subject, body }. Reports successes and failures.
export async function sendInvoices(items) {
  const results = await Promise.all(
    items.map((item) => sendInvoice(item.id, editOf(item)))
  )
  const failed = results.filter((r) => r && r.error)

  return { sent: results.length - failed.length, failed: failed.length }
}
