import { upsertContact } from '@/lib/contact/controllers/upsertContact'

function personOf(data) {
  return data.person || data.user || data
}

// A calendar.person.subscribed webhook: someone subscribed to the Luma
// calendar — capture them as a CRM contact (a lead by default).
export async function handleCalendarSubscribe(data) {
  const p = personOf(data)
  const email = p.email || p.user_email || null

  if (!email) return { skipped: 'no email' }

  const contact = await upsertContact({
    email,
    first_name: p.first_name || p.user_first_name || null,
    last_name: p.last_name || p.user_last_name || null
  })

  return { contactId: contact.id, created: contact.created }
}
