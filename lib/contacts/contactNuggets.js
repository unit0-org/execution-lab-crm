import { contactAnswers } from '@/lib/event/controllers/contactAnswers'
import { listFacts } from './listFacts'

const time = (n) => (n.date ? new Date(n.date).getTime() : 0)

const byDateDesc = (a, b) => time(b) - time(a)

// Everything we know about a contact: manual nuggets plus the answers
// they gave when registering for events, newest first.
export async function contactNuggets(contactId) {
  const [answers, facts] = await Promise.all([
    contactAnswers(contactId),
    listFacts(contactId)
  ])

  return [...facts, ...answers].sort(byDateDesc)
}
