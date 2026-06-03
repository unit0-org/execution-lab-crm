import { contactAnswers } from '@/lib/event/controllers/contactAnswers'
import { spendNugget } from '@/lib/purchase/controllers/spendNugget'
import { listFacts } from './listFacts'

const time = (n) => (n.date ? new Date(n.date).getTime() : 0)

const byDateDesc = (a, b) => time(b) - time(a)

// Everything we know about a contact: total spent first, then manual
// nuggets and the answers they gave registering for events, newest first.
export async function contactNuggets(contactId) {
  const [spend, answers, facts] = await Promise.all([
    spendNugget(contactId),
    contactAnswers(contactId),
    listFacts(contactId)
  ])

  const known = [...facts, ...answers].sort(byDateDesc)

  return spend ? [spend, ...known] : known
}
