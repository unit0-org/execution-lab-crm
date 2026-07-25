import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';
import { uniqueName } from './unique.js';

const insertFolder = async (cohortId) => {
  const id = randomUUID();

  await database().query(
    'insert into cohort_folder (id, cohort_id, name) values ($1, $2, $3)',
    [id, cohortId, uniqueName('Session')]
  );

  return id;
};

// A resource on a cohort, in its own folder. `kind` is what decides how the
// portal renders it: 'recording' embeds as video, the rest stay plain links.
export async function givenACohortResource(cohortId, attributes = {}) {
  assertTestDatabase();

  const { kind = 'resource', url = 'https://example.com/e2e' } = attributes;
  const title = attributes.title || uniqueName('Resource');
  const folderId = await insertFolder(cohortId);

  await database().query(
    `insert into cohort_resource (id, folder_id, kind, title, url)
       values ($1, $2, $3, $4, $5)`,
    [randomUUID(), folderId, kind, title, url]
  );

  return { title, kind, url };
}
