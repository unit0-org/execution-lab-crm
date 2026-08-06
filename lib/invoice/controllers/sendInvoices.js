import { sendInvoice } from './sendInvoice'
import { toBatchResult } from './toBatchResult'

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

// Two renders in flight, never the whole batch. Every invoice embeds ~2.3 MB
// of brand fonts to render its PDF, so a `Promise.all` over the selection
// piled N of those into the heap at once: the container died mid-batch with
// "JavaScript heap out of memory", the request 503'd, and the user saw only
// "Send failed" while some invoices had already gone out. A fixed pair keeps
// peak memory flat however many are selected, and still overlaps the wait.
const AT_ONCE = 2

// Send many invoices; each item is { id } or an edited message with
// { id, to, cc, subject, body }. Reports successes, failures, and the first
// failure's reason (so the UI can show why).
export async function sendInvoices(items) {
  const results = []

  for (let at = 0; at < items.length; at += AT_ONCE) {
    const pair = items.slice(at, at + AT_ONCE)

    results.push(...await Promise.all(pair.map(sendOne)))
  }

  return toBatchResult(results)
}
