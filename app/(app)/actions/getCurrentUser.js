'use server'

import { createClient } from '@/lib/supabase/server'

export async function getCurrentUserAction() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()

  return { email: data.user?.email || null }
}
