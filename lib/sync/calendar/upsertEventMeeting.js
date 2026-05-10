import { classifyEvent } from '@/lib/interactions/classify'

const buildRow = (ev, accountId, internalDomains) => {
  const { qualifies, isRecurring } = classifyEvent(ev, internalDomains)

  return {
    google_event_id:   ev.id,
    title:             ev.summary || null,
    started_at:        ev.start.dateTime,
    ended_at:          ev.end?.dateTime || null,
    meet_link:         ev.hangoutLink || null,
    location:          ev.location || null,
    organizer_email:   ev.organizer?.email || null,
    owner_account_id:  accountId,
    is_recurring:      isRecurring,
    qualifies,
    origin:            'calendar',
  }
}

export async function upsertEventMeeting(supabase, ev, accountId, internalDomains) {
  if (!ev.start?.dateTime) return null
  const { data, error } = await supabase
    .from('meetings')
    .upsert(buildRow(ev, accountId, internalDomains), { onConflict: 'google_event_id' })
    .select('id').single()
  if (error) throw new Error(`upsertEventMeeting: ${error.message}`)

  return data.id
}
