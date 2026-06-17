import { sendInvoice } from './sendInvoice'

const editOf = (item) => (item.subject == null ? undefined : item)

// Send one item, turning a thrown delivery error (PDF/email) into a normal
// { error } result so one bad invoice never rejects the whole batch.
const sendOne = async (item) => {
  try {
    return await sendInvoice(item.id, editOf(item))
  } catch (e) {
    return { error: e.message || 'Send failed' }
  }
}

// Send many invoices; each item is { id } or an edited message with
// { id, to, cc, subject, body }. Reports successes, failures, and the first
// failure's reason (so the UI can show why).
export async function sendInvoices(items) {
  const results = await Promise.all(items.map(sendOne))
  const failures = results.filter((r) => r && r.error)

  return {
    sent: results.length - failures.length,
    failed: failures.length,
    error: failures[0]?.error
  }
}
