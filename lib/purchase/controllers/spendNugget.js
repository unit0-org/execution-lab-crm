import { Purchase } from '../models'
import { sumByCurrency } from './sumByCurrency'
import { formatMoney } from './formatMoney'

const totalLine = (totals) =>
  totals.map((t) => formatMoney(t.cents, t.currency)).join(' + ')

// A 'Total spent' nugget summing a contact's earned purchases (refunds
// excluded), newest date as the source — or null when they've bought
// nothing.
export async function spendNugget(contactId) {
  const rows = await Purchase.scope('earned').findAll({
    where: { contact_id: contactId },
    order: [['purchased_at', 'DESC']]
  })

  if (!rows.length) return null

  const purchases = rows.map((row) => row.toJSON())

  return {
    id: `spend:${contactId}`,
    question: 'Total spent',
    answer: totalLine(sumByCurrency(purchases)),
    event: 'Purchases',
    date: purchases[0].purchased_at
  }
}
