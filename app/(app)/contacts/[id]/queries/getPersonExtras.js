// Joined "extras" for a person — labels, follow-ups, action items.
// Done as a separate query so the main getPerson stays clean.
export async function getPersonExtras(supabase, id) {
  const [labels, followUps, actionItems] = await Promise.all([
    supabase.from('contact_tags').select('tags(id, name, color)').eq('contact_id', id),
    supabase.from('follow_up_flags').select('id, reason, due_date, created_at').eq('contact_id', id).is('resolved_at', null),
    supabase.from('action_items').select('id, text, due_at, done_at, source, created_at').eq('contact_id', id),
  ])

  return {
    labels: (labels.data || []).map((r) => r.tags).filter(Boolean),
    followUps: followUps.data || [],
    actionItems: actionItems.data || [],
  }
}
