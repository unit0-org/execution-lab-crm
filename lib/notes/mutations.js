export const insertNote = (supabase, { contactId, body, pinned }) =>
  supabase.from('notes').insert({ contact_id: contactId, body, pinned: !!pinned })

export const updateNote = (supabase, id, patch) =>
  supabase.from('notes')
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq('id', id)

export const togglePinned = (supabase, id, pinned) =>
  supabase.from('notes')
    .update({ pinned, updated_at: new Date().toISOString() })
    .eq('id', id)

export const deleteNote = (supabase, id) =>
  supabase.from('notes').delete().eq('id', id)
