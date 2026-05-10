// Visible extraction_cards enriched with contact and meeting context
// for grouping on the home page.
const COLS = `
  id, meeting_id, contact_id, card_type, payload, edited_payload,
  status, snoozed_until, priority, created_at,
  contacts(id, display_name),
  meetings(id, title, started_at, location)
`.trim()

export async function getVisibleCards(supabase) {
  const now = new Date().toISOString()
  const { data } = await supabase
    .from('extraction_cards').select(COLS)
    .or(`status.eq.pending,and(status.eq.snoozed,snoozed_until.lte.${now})`)
    .order('priority', { ascending: false })
    .order('created_at', { ascending: false })

  return data || []
}
