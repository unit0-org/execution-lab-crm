import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';
import { uniqueName } from './unique.js';

// A cohort to hold a seat in. The Stripe price id is a placeholder —
// nothing in these tests charges anything.
export async function givenACohort(attributes = {}) {
  assertTestDatabase();

  const id = randomUUID();
  const label = attributes.label || uniqueName('Cohort');

  await database().query(
    `insert into cohort (id, label, slug, start_date, capacity,
       stripe_price_id)
     values ($1, $2, $3, current_date + 30, 10, 'price_e2e')`,
    [id, label, label.toLowerCase()]
  );

  return { id, label };
}
