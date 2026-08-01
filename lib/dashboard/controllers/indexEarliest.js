// Fold signal rows into a contact → oldest-date map. Becoming a client
// happens once, so the earliest qualifying date is the one that counts.
export function indexEarliest(map, rows) {
  for (const row of rows) {
    const seen = map.get(row.contact_id)
    const date = row.first ? new Date(row.first) : null

    if (date && (!seen || date < seen)) map.set(row.contact_id, date)
  }
}
