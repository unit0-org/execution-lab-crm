// The toast confirming a share, worded for one person or several.
export function sharedToast(count) {
  if (!count) return 'Everyone picked already had access'

  if (count === 1) return 'Offer shared — they have been emailed'

  return `Offer shared with ${count} people — they have been emailed`
}
