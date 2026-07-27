// What to append to a paid seat's activity line while it is only part
// paid, so a deposit never reads as the whole price. Empty for a seat paid
// in full or one whose plan has completed.
export function planNote(registration) {
  if (!registration.plan_due_on) return ''

  if (registration.plan_settled) return ''

  return ' · plan 1 of 2'
}
