import { matchContactByEmail } from './matchContact'

const emailOf = (p) => p.signedinUser?.user || p.anonymousUser?.displayName || null

// Upsert one meeting_participants row keyed on (meeting_id, email).
// Returns the row id so transcript entries can link to it.
export async function upsertParticipant(supabase, meetingId, participant) {
  const email = emailOf(participant) || ''
  const contactId = await matchContactByEmail(supabase, email)
  const { data, error } = await supabase
    .from('meeting_participants')
    .upsert({
      meeting_id: meetingId,
      email,
      contact_id: contactId,
      matched_at: contactId ? new Date().toISOString() : null,
    }, { onConflict: 'meeting_id,email' })
    .select('id')
    .single()

  if (error) throw new Error(`upsertParticipant: ${error.message}`)

  return { id: data.id, email }
}
