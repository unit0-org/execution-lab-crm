import { ContactFact } from '@/lib/db/models'

const toNugget = (fact) => ({
  id: fact.id,
  origin: 'manual',
  question: fact.label || null,
  answer: fact.value,
  event: 'Added manually',
  date: fact.created_at
})

// A contact's manual nuggets, shaped like the event-answer nuggets.
export async function listFacts(organizationId, contactId) {
  const rows = await ContactFact.findAll({
    where: { contact_id: contactId },
    include: [{ association: 'contact', required: true,
      where: { organization_id: organizationId }, attributes: [] }],
    order: [['created_at', 'DESC']]
  })

  return rows.map((row) => toNugget(row.toJSON()))
}
