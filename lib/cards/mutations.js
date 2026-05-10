const stamp = () => new Date().toISOString()

export async function insertCard(supabase, payload) {
  const { data, error } = await supabase.from('extraction_cards').insert({
    meeting_id: payload.meetingId || null,
    contact_id: payload.contactId || null,
    card_type:  payload.cardType,
    payload:    payload.payload,
    priority:   payload.priority ?? 50,
  }).select('id').single()
  if (error) throw new Error(`insertCard: ${error.message}`)

  return data.id
}

export const editCard = (s, id, edited) =>
  s.from('extraction_cards').update({ edited_payload: edited }).eq('id', id)

export const dismissCard = (s, id) =>
  s.from('extraction_cards').update({ status: 'dismissed', decided_at: stamp() }).eq('id', id)

export const confirmCard = (s, id) =>
  s.from('extraction_cards').update({ status: 'confirmed', decided_at: stamp() }).eq('id', id)

export const snoozeCard = (s, id, until) =>
  s.from('extraction_cards').update({ status: 'snoozed', snoozed_until: until }).eq('id', id)
