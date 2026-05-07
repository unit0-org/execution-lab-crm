import { parseInteraction } from '@/lib/ai/parseInteraction'

// Server action for the modal's step 1 → step 2 transition.
// Loads recent contacts to give the parser names to match against.
export async function runParseDraft(supabase, fd) {
  const text = fd.get('text') || ''
  const { data: rows } = await supabase
    .from('contacts')
    .select('display_name, contact_emails(email)')
    .order('display_name')
    .limit(200)
  const contacts = (rows || []).map((r) => ({
    display_name: r.display_name,
    email: r.contact_emails?.[0]?.email || '',
  }))

  return parseInteraction(text, contacts)
}
