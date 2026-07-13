import { database, assertTestDatabase } from './connect.js';

// The photo only ever arrives from the Google People sync — there is no UI for
// it — so a test sets it the way that sync would.
export async function setContactPhoto(id, photoUrl) {
  assertTestDatabase();

  await database().query(
    'update contact set photo_url = $2 where id = $1',
    [id, photoUrl]
  );
}
