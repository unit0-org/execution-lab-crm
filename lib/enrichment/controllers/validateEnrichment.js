import { hasIdentity } from './identity'

// Reject a payload that would create blank contacts or has no meeting key.
// Returns an { error } object to short-circuit, or null when valid.
export function validateEnrichment(input) {
  if (!input.meeting || !input.meeting.sourceDriveId) {
    return { error: 'meeting.sourceDriveId is required' }
  }

  const blank = (input.participants || [])
    .some((p) => !p.identity || !hasIdentity(p.identity))

  if (blank) return { error: 'each participant needs an email or a name' }

  return null
}
