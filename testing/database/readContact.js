import { database } from './connect.js';

// Reads straight past the app's soft-delete filter, so a test can prove a row
// still exists and is merely marked deleted.
export async function readContactRow(id) {
  const { rows } = await database().query(
    'select * from contact where id = $1',
    [id]
  );

  return rows.length ? rows[0] : null;
}

// Who owns this email, whatever its casing — the uniqueness rule is global.
export async function readEmailOwner(email) {
  const { rows } = await database().query(
    'select contact_id from contact_email where lower(email) = lower($1)',
    [email]
  );

  return rows.length ? rows[0].contact_id : null;
}
