// Joined "extras" for a person — labels and action items.
export async function getPersonExtras(supabase, id) {
  const [labels, actionItems] = await Promise.all([
    supabase.from('contact_tags').select('tags(id, name, color)').eq('contact_id', id),
    supabase.from('action_items').select('id, text, due_at, done_at, source, created_at').eq('contact_id', id),
  ])

  return {
    labels: (labels.data || []).map((r) => r.tags).filter(Boolean),
    actionItems: actionItems.data || [],
  }
}
