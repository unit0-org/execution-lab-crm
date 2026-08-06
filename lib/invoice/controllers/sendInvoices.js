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
//
// Strictly one at a time, and that is the point. Every invoice embeds ~2.3 MB
// of brand fonts to render its PDF, so sending a batch in parallel piled N of
// those into the heap at once: the container died mid-batch with "JavaScript
// heap out of memory", the request 503'd, and the user saw only "Send failed"
// while some invoices had already gone out. Sequential keeps peak memory flat
// however many are selected — the batch is bounded by time, not by RAM.
export async function sendInvoices(items) {
  const results = []

  for (const item of items) results.push(await sendOne(item))

  const failures = results.filter((r) => r && r.error)

  return {
    sent: results.length - failures.length,
    failed: failures.length,
    error: failures[0]?.error
  }
}
