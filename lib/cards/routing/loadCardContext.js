// Load the full card row plus joined contact + meeting context for routing.
const COLS = `
  id, meeting_id, contact_id, card_type, payload, edited_payload,
  contacts(id, display_name, google_contact_id),
  meetings(id, started_at)
`.trim()

export async function loadCardContext(supabase, cardId) {
  const { data } = await supabase.from('extraction_cards').select(COLS).eq('id', cardId).single()

  return {
    ...data,
    effective: data.edited_payload || data.payload,
  }
}
