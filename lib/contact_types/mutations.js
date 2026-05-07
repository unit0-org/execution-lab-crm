export const insertContactType = (supabase, { name, color }) =>
  supabase.from('contact_types').insert({ name, color }).select('id').single()

export const deleteContactType = (supabase, id) =>
  supabase.from('contact_types').delete().eq('id', id)

export const attachContactType = (supabase, { contactId, typeId }) =>
  supabase.from('contact_type_assignments')
    .insert({ contact_id: contactId, type_id: typeId })

export const detachContactType = (supabase, { contactId, typeId }) =>
  supabase.from('contact_type_assignments').delete()
    .eq('contact_id', contactId).eq('type_id', typeId)
