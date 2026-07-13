import { anonClient } from './anonClient.js';

// Signs in for real, returning the session exactly as @supabase/ssr stores it.
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
