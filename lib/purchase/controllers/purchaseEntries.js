import { Purchase } from '../models'
import { toPurchaseEntry } from './toPurchaseEntry'

// A contact's purchases as activity entries.
export async function purchaseEntries(contactId) {
  const rows = await Purchase.findAll({
    where: { contact_id: contactId },
    order: [['purchased_at', 'DESC']]
  })

  return rows.map((row) => toPurchaseEntry(row.toJSON()))
}
