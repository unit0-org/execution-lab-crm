import { createClient } from '@supabase/supabase-js'

let cached = null

// The service-role Supabase client. It bypasses RLS and never persists a
// session, so it is SERVER-ONLY — the key must never reach the browser.
// Singleton, reused across invocations.
export function serviceClient() {
  if (!cached)
    cached = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    )

  return cached
}
