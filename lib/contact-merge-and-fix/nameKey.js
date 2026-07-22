import { normalizeText } from './normalizeText'

// The key two contacts share when they are the "same name": their full
// name, whitespace-normalized and lower-cased. Blank for the nameless.
export function nameKey(contact) {
  const name = [contact.first_name, contact.last_name].join(' ')

  return normalizeText(name).toLowerCase()
}
