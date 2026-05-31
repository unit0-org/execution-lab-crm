import { createClient } from '@/lib/supabase/server'

const SELECT = 'id, first_name, last_name, created_at, contact_email(email)'

export async function listContacts() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('contact')
    .select(SELECT)
    .order('created_at', { ascending: false })

  return data || []
}
