// Fold signal rows into a contact → newest-date map, keeping the latest
// across every group folded in.
export function indexLatest(map, rows) {
  for (const row of rows) {
    const seen = map.get(row.contact_id)
    const date = row.last ? new Date(row.last) : null

    if (date && (!seen || date > seen)) map.set(row.contact_id, date)
  }
}
