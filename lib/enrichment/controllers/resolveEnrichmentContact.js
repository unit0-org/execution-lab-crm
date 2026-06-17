import { Contact } from '@/lib/contact/models'
import { findContactIdByEmail } from './findContactIdByEmail'
import { findContactIdByName } from './findContactIdByName'
import { fullNameOf, nameParts } from './identity'

// Op3 dedup precedence: exact email → exact full name → create. Returns
// { id, created, matchedBy } and never overwrites an existing contact name.
export async function resolveEnrichmentContact(identity, t) {
  const byEmail = await findContactIdByEmail(identity.email, t)

  if (byEmail) return { id: byEmail, created: false, matchedBy: 'email' }

  const byName = await findContactIdByName(fullNameOf(identity), t)

  if (byName) return { id: byName, created: false, matchedBy: 'name' }

  const created = await Contact.create(nameParts(identity), { transaction: t })

  return { id: created.id, created: true, matchedBy: 'created' }
}
