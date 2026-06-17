// A human summary of a bulk-send result.
export function sendResultMessage(result) {
  const sent = result?.sent || 0
  const failed = result?.failed || 0

  if (failed) return result.error || `Sent ${sent}, ${failed} failed`

  return `Sent ${sent} invoice${sent === 1 ? '' : 's'}`
}
