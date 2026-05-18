// Recent qualifying meetings offered in the "Link a meeting" picker,
// minus the ones already hand-linked to this contact.
const SINCE = () => new Date(Date.now() - 60 * 86400000).toISOString()

export async function getLinkableMeetings(supabase, contactId) {
  const [{ data: meetings }, { data: links }] = await Promise.all([
    supabase
      .from('interactions')
      .select('id, title, started_at')
      .eq('qualifies', true)
      .gte('started_at', SINCE())
      .order('started_at', { ascending: false })
      .limit(50),
    supabase
      .from('meeting_contact_links')
      .select('meeting_id')
      .eq('contact_id', contactId),
  ])
  const linked = new Set((links || []).map((l) => l.meeting_id))

  return (meetings || []).filter((m) => !linked.has(m.id))
}
