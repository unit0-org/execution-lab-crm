import { supabaseUrl } from './anonClient.js';

// The app names its auth cookie after the first DNS label of the Supabase URL.
export function projectRef() {
  return new URL(supabaseUrl()).hostname.split('.')[0];
}
