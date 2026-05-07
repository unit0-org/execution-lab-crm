import { createClient } from '@/lib/supabase/server'

// Returns a Supabase server client if a user is signed in, else null.
export async function authedClient() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return user ? supabase : null
}
