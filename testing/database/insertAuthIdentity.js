import { randomUUID } from 'node:crypto';
import { database } from './connect.js';

// Password sign-in needs a matching email identity alongside the user row.
export async function insertAuthIdentity(userId, email) {
  await database().query(
    `insert into auth.identities (
       id, user_id, provider_id, provider, identity_data,
       last_sign_in_at, created_at, updated_at
     ) values (
       $1, $2::uuid, $3, 'email',
       jsonb_build_object('sub', $2::text, 'email', $3::text,
                          'email_verified', true),
       now(), now(), now()
     )`,
    [randomUUID(), userId, email]
  );
}
