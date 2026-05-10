const stamp = () => new Date().toISOString()

export async function saveUserNotes(supabase, meetingId, notes) {
  await supabase.from('meetings').update({
    user_notes: notes,
    user_notes_at: stamp(),
    documentation_status: 'documented',
  }).eq('id', meetingId)
}

export const snoozeDocumentation = (s, meetingId, until) =>
  s.from('meetings')
    .update({ documentation_status: 'snoozed', documentation_snoozed_until: until })
    .eq('id', meetingId)

export const dismissDocumentation = (s, meetingId) =>
  s.from('meetings').update({ documentation_status: 'dismissed' }).eq('id', meetingId)

export const markMissed = (s, ids) =>
  ids.length === 0 ? null
    : s.from('meetings').update({ documentation_status: 'missed' }).in('id', ids)
