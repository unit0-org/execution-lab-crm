// Map a registration's payment status to a Badge tone. Paid is the only
// positive outcome; everything else reads as a neutral pending state.
const TONES = { paid: 'success' }

export function paymentTone(status) {
  return TONES[status] || 'neutral'
}
