// Merge per-contact first-qualifying-purchase and first-paid-registration
// dates into one entry per contact, keyed by contact id.
export function collectBecame(purchases, registrations) {
  const byId = new Map()

  index(byId, purchases, 'purchaseAt')
  index(byId, registrations, 'regAt')

  return byId
}

function index(map, rows, key) {
  for (const row of rows) {
    if (!row.first) continue

    const entry = map.get(row.contact_id) || { contactId: row.contact_id }

    entry[key] = new Date(row.first)
    map.set(row.contact_id, entry)
  }
}
