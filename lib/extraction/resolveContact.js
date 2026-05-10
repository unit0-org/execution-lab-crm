// Map an extracted email to a contact_id. Falls back to the meeting's
// primary external participant when the email isn't given or matched.
export async function resolveContactId(supabase, email, fallbackEmail) {
  const target = email || fallbackEmail
  if (!target) return null
  const { data } = await supabase
    .from('contact_emails').select('contact_id').eq('email', target.toLowerCase()).maybeSingle()

  return data?.contact_id || null
}

export const primaryExternalEmail = (externals) => externals[0]?.email || null
