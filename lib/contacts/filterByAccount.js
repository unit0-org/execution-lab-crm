export function filterByAccount(contacts, accountId) {
  if (!accountId) return contacts
  return contacts.filter((c) => c.google_account_id === accountId)
}
