// Map a registration's payment state to a Badge tone: paid is the positive
// outcome, an expired (released) hold reads as an error, and a still-held
// pending seat stays neutral.
const TONES = { paid: 'success', expired: 'error' }

export function paymentTone(status) {
  return TONES[status] || 'neutral'
}
