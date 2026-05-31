import { createClient } from '@/lib/supabase/server'

export async function deleteContact(id) {
  const supabase = await createClient()

  return supabase.from('contact').delete().eq('id', id)
}
