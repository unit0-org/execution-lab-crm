import { createClient } from '@/lib/supabase/server'

export async function updateContact(id, fields) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('contact')
    .update(fields)
    .eq('id', id)

  return { error: error?.message }
}
