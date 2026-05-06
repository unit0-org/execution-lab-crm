// Replace all rows in `table` for a given contact_id (delete then insert).
// Simpler than diffing — Google is the source of truth on each sync.
export async function replaceChildren(supabase, table, contactId, rows) {
  await supabase.from(table).delete().eq('contact_id', contactId)
  if (!rows.length) return
  const withFk = rows.map((r) => ({ ...r, contact_id: contactId }))
  await supabase.from(table).insert(withFk)
}
