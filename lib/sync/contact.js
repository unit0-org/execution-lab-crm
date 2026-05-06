// Upsert one contacts row by google_contact_id; returns the contact id.
export async function upsertContact(supabase, accountId, person) {
  const { data, error } = await supabase
    .from('contacts')
    .upsert(
      {
        google_account_id: accountId,
        google_contact_id: person.googleContactId,
        display_name: person.displayName,
      },
      { onConflict: 'google_contact_id' },
    )
    .select('id')
    .single()

  if (error || !data) return null
  return data.id
}
