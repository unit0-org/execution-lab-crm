import { createClient } from '@supabase/supabase-js';

const NO_PERSIST = { auth: { autoRefreshToken: false, persistSession: false } };

export function supabaseUrl() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL;
}

export function anonClient() {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  return createClient(supabaseUrl(), key, NO_PERSIST);
}
