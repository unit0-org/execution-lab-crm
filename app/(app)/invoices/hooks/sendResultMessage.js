// A human summary of a bulk-send result.
export function sendResultMessage(result) {
  const sent = result?.sent || 0
  const failed = result?.failed || 0

  if (failed) return result.error || `Sent ${sent}, ${failed} failed`

  // Nothing sent and nothing failed means nothing was sendable — say that,
  // rather than reporting "Sent 0 invoices" as if the batch had run.
  if (!sent) return 'Nothing to send — approve these invoices first'

  return `Sent ${sent} invoice${sent === 1 ? '' : 's'}`
}
