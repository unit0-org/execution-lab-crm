import { createClient } from '@/lib/supabase/server'

const SELECT = 'id, first_name, last_name, created_at, contact_email(id, email)'

export async function getContact(id) {
  const supabase = await createClient()
  const { data } = await supabase
    .from('contact')
    .select(SELECT)
    .eq('id', id)
    .single()

  return data
}
