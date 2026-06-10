// Map a waitlist status to a Badge tone, precomputed so the row needs no
// JSX conditional. Waiting is neutral, invited is in-flight, converted
// is the positive outcome.
const TONES = { invited: 'accent', converted: 'success' }

export function waitlistTone(status) {
  return TONES[status] || 'neutral'
}
