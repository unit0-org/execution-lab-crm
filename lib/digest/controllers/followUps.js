import { Contact } from '@/lib/contact/models'
import { lastActivityByContact } from './lastActivityByContact'
import { selectFollowUps } from './selectFollowUps'

// Contacts to reconnect with: never contacted, or no activity in >= 60
// days. Never-contacted first, then longest-stale, capped with a "+N more".
export async function followUps() {
  const [contacts, activity] = await Promise.all([
    Contact.findAll({ attributes: ['id', 'first_name', 'last_name'] }),
    lastActivityByContact()
  ])

  return selectFollowUps(contacts, activity)
}
