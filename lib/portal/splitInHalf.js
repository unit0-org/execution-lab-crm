// A seat's price as the plan's two halves. The deposit takes the odd cent
// so the two always add back to the total exactly.
export function splitInHalf(totalCents) {
  const depositCents = Math.ceil(totalCents / 2)

  return {
    totalCents,
    depositCents,
    balanceCents: totalCents - depositCents
  }
}
