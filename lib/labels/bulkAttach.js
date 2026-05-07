// Apply one tag to many contacts. Skips rows that are already labelled
// (UNIQUE constraint) by using upsert with onConflict ignore.
export async function bulkAttachLabel(supabase, { contactIds, tagId }) {
  if (!contactIds.length || !tagId) return null
  const rows = contactIds.map((id) => ({ contact_id: id, tag_id: tagId }))
  const { error } = await supabase
    .from('contact_tags')
    .upsert(rows, { onConflict: 'contact_id,tag_id', ignoreDuplicates: true })
  return error
}
