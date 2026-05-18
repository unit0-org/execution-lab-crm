// Manually associate a meeting with a contact. Stored in
// meeting_contact_links so the sync (which re-derives
// meeting_participants.contact_id) can never overwrite it. Idempotent.
export async function linkMeetingToContact(supabase, meetingId, contactId) {
  const { error } = await supabase
    .from('meeting_contact_links')
    .upsert(
      { meeting_id: meetingId, contact_id: contactId },
      { onConflict: 'meeting_id,contact_id' },
    )

  return error
}
