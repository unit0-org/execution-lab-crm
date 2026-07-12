import { Offer } from '@/lib/offerGenerator/models'

// The ids of every offer a contact owns — used by the merge share-collapse.
export async function ownedOfferIds(contactId, t) {
  const rows = await Offer.findAll({
    where: { contact_id: contactId }, attributes: ['id'], transaction: t
  })

  return rows.map((row) => row.id)
}
