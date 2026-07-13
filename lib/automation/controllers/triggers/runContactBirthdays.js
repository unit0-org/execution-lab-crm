import { Contact } from '@/lib/contact/models'
import { todayIso } from '@/lib/portal/todayIso'
import { dispatchContactBirthday } from './dispatchContactBirthday'

// Cron: fire contact_birthday for every contact whose birthday is today
// (business-local), so time-based automations can act on it.
export async function runContactBirthdays() {
  const [, month, day] = todayIso().split('-').map(Number)
  const contacts = await Contact.findAll({
    where: { birth_month: month, birth_day: day }
  })

  for (const contact of contacts) await dispatchContactBirthday(contact.id)

  return { fired: contacts.length }
}
