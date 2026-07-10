import { createClient } from '@supabase/supabase-js'
import { CONTACT_FILE_BUCKET } from './contactFileBucket'

let cached = null

// The service-role Supabase client, scoped to the contact-file bucket. It
// bypasses RLS and never persists a session. Singleton, reused across
// invocations. Feature code never touches it — go through lib/storage.
export function contactFileStore() {
  if (!cached)
    cached = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY,
      { auth: { persistSession: false } }
    )

  return cached.storage.from(CONTACT_FILE_BUCKET)
}
