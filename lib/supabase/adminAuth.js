import { serviceClient } from './serviceClient'

// Supabase's auth admin API: creating a login and replacing a password,
// neither of which the anon key may do. Server-only, like its client.
export function adminAuth() {
  return serviceClient().auth.admin
}
