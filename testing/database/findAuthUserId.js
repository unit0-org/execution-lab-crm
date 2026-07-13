import { database } from './connect.js';

export async function findAuthUserId(email) {
  const { rows } = await database().query(
    'select id from auth.users where email = $1',
    [email]
  );

  return rows.length ? rows[0].id : null;
}
