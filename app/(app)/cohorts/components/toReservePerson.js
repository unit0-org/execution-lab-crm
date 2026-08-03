import { splitName } from '@/lib/contact/controllers/splitName'

// The person fields the preview needs, from what was typed: a full name
// split the same way a self-serve registration splits it, so a reserved
// person's contact reads identically to everyone else's.
export function toReservePerson(person) {
  return {
    ...splitName(person.name),
    email: person.email.trim()
  }
}
