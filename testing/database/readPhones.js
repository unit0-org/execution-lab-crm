import { database } from './connect.js';

export async function readPhones(contactId) {
  const { rows } = await database().query(
    'select phone from contact_phone where contact_id = $1 order by phone',
    [contactId]
  );

  return rows.map((row) => row.phone);
}
