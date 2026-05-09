// Delete a Google-sourced contact by its resourceName when People API
// reports it as removed. No-op when the row doesn't exist locally.
export async function deletePerson(supabase, accountId, raw) {
  const id = raw?.resourceName
  if (!id) return false
  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('google_account_id', accountId)
    .eq('google_contact_id', id)
  return !error
}
