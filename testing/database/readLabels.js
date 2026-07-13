import { database } from './connect.js';

export async function readContactLabels(contactId) {
  const { rows } = await database().query(
    `select c.name from contact_category c
       join contact_category_link l on l.category_id = c.id
      where l.contact_id = $1 order by c.name`,
    [contactId]
  );

  return rows.map((row) => row.name);
}

export async function countLabelsNamed(name) {
  const { rows } = await database().query(
    'select count(*)::int as total from contact_category where name = $1',
    [name]
  );

  return rows[0].total;
}
