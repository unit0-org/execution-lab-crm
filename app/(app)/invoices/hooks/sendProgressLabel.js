const noun = (n) => (n === 1 ? 'invoice' : 'invoices')

// What the bar says: what is about to happen, how far it has got, and that
// it is finished — two invoices at a time, so it moves in pairs.
export function sendProgressLabel(done, total) {
  if (!done) return `${total} ${noun(total)} ready to send`

  if (done < total) return `Sending — ${done} of ${total} sent`

  return `All ${total} sent`
}
