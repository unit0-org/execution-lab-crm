import { createClient } from '@/lib/supabase/server'
import { insertEmails } from './emails'

export async function createContact(first, last, emails) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('contact')
    .insert({ first_name: first, last_name: last })
    .select('id')
    .single()
  if (error) return { error: error.message }

  return insertEmails(supabase, data.id, emails)
}
