import { createClient } from '@/lib/supabase/server'

// The signed-in Supabase user (id + email), or null.
export async function currentUser() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return data.user || null
}
