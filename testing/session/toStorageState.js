import { projectRef } from '../supabase/projectRef.js';
import { encodeSessionCookie, chunkCookie } from './encodeSessionCookie.js';

function toCookie(part, session) {
  return {
    ...part,
    domain: 'localhost',
    path: '/',
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
    expires: session.expires_at || -1
  };
}

// Turns a real Supabase session into the cookies the app reads, as a Playwright
// storageState — so the browser starts already signed in, as the user would be.
export function toStorageState(session) {
  const name = `sb-${projectRef()}-auth-token`;
  const value = encodeSessionCookie(session);
  const cookies = chunkCookie(name, value).map((part) =>
    toCookie(part, session)
  );

  return { cookies, origins: [] };
}
