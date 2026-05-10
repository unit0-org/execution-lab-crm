// extraction_cards persistence — the queue of pending confirm/dismiss
// decisions surfaced on the home page.
const COLS = `
  id, meeting_id, contact_id, card_type, payload, edited_payload,
  status, snoozed_until, priority, created_at, decided_at
`.trim()

export async function fetchVisibleCards(supabase) {
  const now = new Date().toISOString()
  const { data } = await supabase
    .from('extraction_cards').select(COLS)
    .or(`status.eq.pending,and(status.eq.snoozed,snoozed_until.lte.${now})`)
    .order('priority', { ascending: false })
    .order('created_at', { ascending: false })

  return data || []
}

export async function fetchCardsForMeeting(supabase, meetingId) {
  const { data } = await supabase.from('extraction_cards').select(COLS).eq('meeting_id', meetingId)

  return data || []
}
