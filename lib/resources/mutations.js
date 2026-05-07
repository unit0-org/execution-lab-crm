import { detectResourceKind } from './detectKind'

export const insertResource = (supabase, { contactId, url, label, note }) =>
  supabase.from('contact_resources').insert({
    contact_id: contactId,
    url,
    kind: detectResourceKind(url),
    label: label || null,
    note: note || null,
  })

export const deleteResource = (supabase, id) =>
  supabase.from('contact_resources').delete().eq('id', id)
