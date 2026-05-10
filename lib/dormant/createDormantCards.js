import { findDormantContacts } from './findDormantContacts'
import { insertCard } from '@/lib/cards/mutations'

const buildPayload = (c) => ({
  reason: c.last_met_at
    ? `No interaction in ${Math.round((Date.now() - new Date(c.last_met_at)) / 86400000 / 7)} weeks`
    : 'No interactions on record',
  suggestedWindow: 'two-weeks',
  contactEmail: null,
})

export async function createDormantCards(supabase) {
  const dormant = await findDormantContacts(supabase)
  for (const c of dormant) {
    await insertCard(supabase, {
      contactId: c.id, cardType: 'follow_up', payload: buildPayload(c), priority: 30,
    })
  }

  return { created: dormant.length }
}
