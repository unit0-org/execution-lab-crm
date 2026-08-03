// Map a registration's payment state to a Badge tone: paid is the positive
// outcome, an expired (released) hold reads as an error, a staff-reserved
// seat is called out in the accent tone, and a cancelled one recedes to
// neutral alongside a seat still being paid for.
const TONES = { paid: 'success', expired: 'error', reserved: 'accent' }

export function paymentTone(status) {
  return TONES[status] || 'neutral'
}
