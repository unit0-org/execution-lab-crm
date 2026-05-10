// Participants on a meeting, joined to contacts when known.
export async function fetchParticipants(supabase, meetingId) {
  const { data } = await supabase
    .from('meeting_participants')
    .select('id, email, contact_id, contacts(id, display_name)')
    .eq('meeting_id', meetingId)

  return data || []
}

const isInternal = (email, internalDomains) =>
  internalDomains.has(email?.split('@')[1])

export async function fetchExternalParticipants(supabase, meetingId, internalDomains) {
  const all = await fetchParticipants(supabase, meetingId)

  return all.filter((p) => !isInternal(p.email, internalDomains))
}
