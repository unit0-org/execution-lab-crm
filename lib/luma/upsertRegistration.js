import { matchContactByEmail } from '@/lib/sync/meet/matchContact'

const REG_TYPE = { rsvp: 'rsvp', invited: 'invited', waitlist: 'waitlist' }

export async function upsertLumaRegistration(supabase, eventId, payload) {
  const email = payload.email || payload.user?.email
  if (!email) return
  const contactId = await matchContactByEmail(supabase, email)
  await supabase.from('luma_registrations').upsert({
    luma_event_id: eventId,
    contact_id: contactId,
    email,
    registration_type: REG_TYPE[payload.type] || 'rsvp',
    attended: !!payload.attended,
    registered_at: payload.registered_at || new Date().toISOString(),
  })
}
