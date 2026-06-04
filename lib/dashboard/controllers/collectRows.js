// Index aggregate rows by contact into a shared map under `key`.
export function collectRows(map, rows, key) {
  for (const row of rows) {
    const entry = map.get(row.contact_id) || { contactId: row.contact_id }

    entry[key] = row
    map.set(row.contact_id, entry)
  }
}
