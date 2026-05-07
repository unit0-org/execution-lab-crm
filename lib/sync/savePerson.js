import { upsertContact } from './contact'
import { replaceChildren } from './replaceChildren'

// Persist one Google person: upsert contact, replace its emails + phones.
export async function savePerson(supabase, accountId, person) {
  const contactId = await upsertContact(supabase, accountId, person)
  if (!contactId) return false
  await replaceChildren(supabase, 'contact_emails', contactId, person.emails)
  await replaceChildren(supabase, 'contact_phones', contactId, person.phones)

  return true
}
