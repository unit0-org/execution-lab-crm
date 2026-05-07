import { matchContactByEmail } from '@/lib/sync/meet/matchContact'

// Persist event attendees as meeting_participants. Matched to contacts
// via contact_emails. Idempotent via UNIQUE(meeting_id, email).
export async function upsertEventAttendees(supabase, meetingId, attendees = []) {
  for (const a of attendees) {
    if (!a.email) continue
    const contactId = await matchContactByEmail(supabase, a.email)
    await supabase.from('meeting_participants').upsert({
      meeting_id: meetingId,
      email: a.email,
      contact_id: contactId,
      matched_at: contactId ? new Date().toISOString() : null,
    }, { onConflict: 'meeting_id,email' })
  }
}
