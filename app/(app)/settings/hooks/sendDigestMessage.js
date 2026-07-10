// Turn a send-digest result into a human toast message.
export function sendDigestMessage(result) {
  if (result?.error) return `Digest failed: ${result.error}`

  return `Sent to ${result.summary.recipients} people`
}
