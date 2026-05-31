const toRows = (contactId, emails) =>
  emails.filter(Boolean).map((email) => ({ contact_id: contactId, email }))

export async function insertEmails(supabase, contactId, emails) {
  const rows = toRows(contactId, emails)
  if (!rows.length) return { id: contactId }

  const { error } = await supabase.from('contact_email').insert(rows)
  if (error) return { error: error.message }

  return { id: contactId }
}
