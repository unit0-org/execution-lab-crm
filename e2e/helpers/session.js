// Mints a real Supabase session for a test user and writes it as a Playwright
// storageState file, in the exact cookie format @supabase/ssr 0.10 reads:
//   name  = sb-<project-ref>-auth-token   (chunked .0/.1 when large)
//   value = "base64-" + base64url(JSON.stringify(session))
// This is the least-friction way to sign in "as the user" without the PKCE
// browser dance; the token itself is issued by Supabase, so the app trusts it.

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { projectRef, signIn } from './supabaseAdmin.js';
import { seedAuthUser, seedStaffMembership } from './db.js';

const here = dirname(fileURLToPath(import.meta.url));
export const authDir = join(here, '..', 'results', '.auth');
export const STAFF_STATE = join(authDir, 'staff.json');

const MAX_CHUNK = 3180; // matches @supabase/ssr chunker

function base64url(text) {
  return Buffer.from(text, 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function chunk(name, value) {
  if (value.length <= MAX_CHUNK) return [{ name, value }];

  const parts = [];

  for (let i = 0, idx = 0; i < value.length; i += MAX_CHUNK, idx += 1) {
    parts.push({ name: `${name}.${idx}`, value: value.slice(i, i + MAX_CHUNK) });
  }

  return parts;
}

function toStorageState(session) {
  const name = `sb-${projectRef()}-auth-token`;
  const value = `base64-${base64url(JSON.stringify(session))}`;
  const cookies = chunk(name, value).map((part) => ({
    ...part,
    domain: 'localhost',
    path: '/',
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
    expires: session.expires_at || -1
  }));

  return { cookies, origins: [] };
}

function write(path, state) {
  mkdirSync(authDir, { recursive: true });
  writeFileSync(path, JSON.stringify(state, null, 2));

  return path;
}

// Create-or-reuse a staff user, link them to the org, sign in, save state.
export async function mintStaffState(options = {}) {
  const email = options.email || 'staff@e2e.test';
  const password = options.password || 'e2e-Passw0rd!';
  const role = options.role || 'admin';

  const userId = await seedAuthUser(email, password);

  await seedStaffMembership(userId, email, role);

  const session = await signIn(email, password);

  return write(STAFF_STATE, toStorageState(session));
}
