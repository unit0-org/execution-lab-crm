// Our thin wrapper over @supabase/supabase-js for the TEST harness only. We do
// NOT need a service-role key: test users are seeded straight into the test
// project's auth schema (see db.js seedAuthUser), then signed in normally — so
// Supabase still issues a genuine JWT that the app validates like any other.

import { createClient } from '@supabase/supabase-js';

const noPersist = { auth: { autoRefreshToken: false, persistSession: false } };

function url() {
  return process.env.NEXT_PUBLIC_SUPABASE_URL;
}

export function anonClient() {
  return createClient(url(), process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, noPersist);
}

// The app derives its auth-cookie name from the first DNS label of the URL.
export function projectRef() {
  return new URL(url()).hostname.split('.')[0];
}

// Sign in and return the session object exactly as @supabase/ssr would store it.
export async function signIn(email, password) {
  const { data, error } = await anonClient().auth.signInWithPassword({
    email,
    password
  });

  if (error || !data?.session) {
    throw new Error(`Sign-in failed for ${email}: ${error?.message}`);
  }

  return data.session;
}
