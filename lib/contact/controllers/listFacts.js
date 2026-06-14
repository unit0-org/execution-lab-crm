import { ContactFact } from '@/lib/contact/models'

const toNugget = (fact) => ({
  id: fact.id,
  origin: 'manual',
  question: fact.label || null,
  answer: fact.value,
  event: 'Added manually',
  date: fact.created_at
})

// A contact's manual nuggets, shaped like the event-answer nuggets.
export async function listFacts(contactId) {
  const rows = await ContactFact.findAll({
    where: { contact_id: contactId },
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toNugget(row.toJSON()))
}
