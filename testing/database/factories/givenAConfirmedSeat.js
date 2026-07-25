import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';

// The seat that unlocks a cohort's resources. Seeded 'paid' by default so no
// hold can lapse mid-test; `lapsed: true` instead backdates an unpaid one
// past its hold window, which is how a seat is released.
export async function givenAConfirmedSeat(cohortId, member, options = {}) {
  assertTestDatabase();

  const id = randomUUID();
  const status = options.lapsed ? 'pending' : 'paid';
  const age = options.lapsed ? '48 hours' : '0 hours';

  await database().query(
    `insert into registration (id, cohort_id, contact_id,
       first_name, last_name, email, status, created_at)
     values ($1, $2, $3, 'E2E', 'Member', $4, $5,
       now() - $6::interval)`,
    [id, cohortId, member.contactId, member.email, status, age]
  );

  return id;
}
