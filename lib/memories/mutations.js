export async function insertMemory(supabase, payload) {
  const { data, error } = await supabase.from('memories').insert({
    contact_id:        payload.contactId,
    body:              payload.body,
    kind:              payload.kind || 'context',
    source_meeting_id: payload.sourceMeetingId || null,
  }).select('id').single()
  if (error) throw new Error(`insertMemory: ${error.message}`)

  return data.id
}

export async function archiveMemory(supabase, id) {
  await supabase.from('memories').update({ status: 'archived', updated_at: new Date().toISOString() }).eq('id', id)
}

export async function updateMemoryBody(supabase, id, body) {
  await supabase.from('memories').update({ body, updated_at: new Date().toISOString() }).eq('id', id)
}
