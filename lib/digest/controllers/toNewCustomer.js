const at = (d) => (d ? d.getTime() : Infinity)

// Resolve a contact's customer-crossing moment (the earliest of their first
// qualifying purchase and first paid registration) and an honest label.
export function toNewCustomer(entry) {
  const becameAt = new Date(Math.min(at(entry.purchaseAt), at(entry.regAt)))

  return { contactId: entry.contactId, becameAt, via: viaLabel(entry) }
}

function viaLabel(entry) {
  const t = Math.min(at(entry.purchaseAt), at(entry.regAt))
  const byPurchase = at(entry.purchaseAt) === t
  const byRegistration = at(entry.regAt) === t

  if (byPurchase && byRegistration) return 'first purchase + registration'

  if (byPurchase) return 'first qualifying purchase'

  return 'first paid registration'
}
