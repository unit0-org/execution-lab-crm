import { fullName } from './fullName'

// A contact's display label: their name, else their first email, else a
// fallback. Shared by the header, the row, and the page <title>.
export function contactLabel(contact) {
  if (!contact) return 'Contact'

  return fullName(contact) || contact.contact_email?.[0]?.email
    || 'Unnamed contact'
}
