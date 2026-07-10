// The first row for each contact from a check-in-ascending list — that
// contact's earliest check-in.
export function earliestPerContact(rows) {
  const seen = new Map()

  for (const row of rows) {
    if (!seen.has(row.contact_id)) seen.set(row.contact_id, row)
  }

  return [...seen.values()]
}
