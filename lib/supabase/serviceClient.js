import { createClient } from '@supabase/supabase-js'

// Server-only client using the service role key — for cron / background
// jobs that have no user session. NEVER import this from client code.
export function createServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    { auth: { persistSession: false } },
  )
}
