// Group active input rows by offer_id into { [offerId]: [{ id, value }] }.
export function groupActive(rows) {
  const byOffer = {}

  for (const row of rows) {
    const list = byOffer[row.offer_id] || []

    list.push({ id: row.id, value: row.value })
    byOffer[row.offer_id] = list
  }

  return byOffer
}
