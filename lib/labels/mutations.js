// Single-row write helpers for the labels feature.
export const insertLabel = (supabase, { name, color }) =>
  supabase.from('tags').insert({ name, color }).select('id').single()

export const deleteLabel = (supabase, id) =>
  supabase.from('tags').delete().eq('id', id)

export const attachLabel = (supabase, { contactId, tagId }) =>
  supabase.from('contact_tags').insert({ contact_id: contactId, tag_id: tagId })

export const detachLabel = (supabase, { contactId, tagId }) =>
  supabase.from('contact_tags').delete()
    .eq('contact_id', contactId).eq('tag_id', tagId)
