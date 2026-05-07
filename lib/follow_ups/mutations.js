export const snoozeFlag = (supabase, id, dueDate) =>
  supabase.from('follow_up_flags').update({ due_date: dueDate }).eq('id', id)

export const resolveFlag = (supabase, id) =>
  supabase.from('follow_up_flags')
    .update({ resolved_at: new Date().toISOString() })
    .eq('id', id)

export const reopenFlag = (supabase, id) =>
  supabase.from('follow_up_flags').update({ resolved_at: null }).eq('id', id)
