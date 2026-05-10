import { insertMemory } from '@/lib/memories/mutations'
import { updatePerson } from '@/lib/google/peopleWrite/updatePerson'
import { factToPeopleBody } from '@/lib/google/peopleWrite/factToBody'

const saveAsMemory = (supabase, card) =>
  insertMemory(supabase, {
    contactId: card.contact_id,
    body: card.effective.body,
    kind: card.effective.kind || 'context',
    sourceMeetingId: card.meeting_id,
  })

const saveToContacts = async (supabase, card, owner) => {
  const fact = card.effective
  const mapped = factToPeopleBody(fact.contactsField, fact.body)
  if (!mapped || !card.contacts?.google_contact_id) return saveAsMemory(supabase, card)
  const resourceName = `people/${card.contacts.google_contact_id.replace(/^people\//, '')}`
  await updatePerson(owner.accessToken, resourceName, mapped.body, mapped.mask)
}

export async function routeFact(supabase, card, owner) {
  if (card.effective.destination === 'google_contacts') return saveToContacts(supabase, card, owner)

  return saveAsMemory(supabase, card)
}
