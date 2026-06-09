import { contactAnswers } from '@/lib/event/controllers/contactAnswers'
import { listFacts } from './listFacts'

const time = (n) => (n.date ? new Date(n.date).getTime() : 0)

const byDateDesc = (a, b) => time(b) - time(a)

// The manual nuggets and event-registration answers we know about a
// contact, newest first. (Total spent is a system insight, not a nugget.)
export async function contactNuggets(organizationId, contactId) {
  const [answers, facts] = await Promise.all([
    contactAnswers(contactId),
    listFacts(organizationId, contactId)
  ])

  return [...facts, ...answers].sort(byDateDesc)
}
