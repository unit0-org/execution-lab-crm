import { fetchRecentQualifying } from '@/lib/interactions/queries'
import { deriveDocumentationCards } from '@/lib/interactions/documentationCards'
import { markMissed } from '@/lib/interactions/mutations'
import { fetchExternalParticipants } from '@/lib/interactions/participants'
import { loadInternalDomains } from '@/lib/interactions/internalDomains'

const SEVEN_DAYS = 7 * 86400000
const isStale = (r) => Date.now() - new Date(r.ended_at || r.started_at).getTime() > SEVEN_DAYS

const attachAttendees = (supabase, domains) => async (card) => ({
  ...card,
  attendees: await fetchExternalParticipants(supabase, card.id, domains),
})

export async function getDocumentMeetingCards(supabase) {
  const rows = await fetchRecentQualifying(supabase, 8)
  const stale = rows.filter((r) => r.documentation_status === 'pending' && isStale(r))
  await markMissed(supabase, stale.map((r) => r.id))
  const cards = deriveDocumentationCards(rows)
  const domains = await loadInternalDomains(supabase)

  return Promise.all(cards.map(attachAttendees(supabase, domains)))
}
