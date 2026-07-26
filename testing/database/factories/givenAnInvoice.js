import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';
import { ORGANIZATION_ID } from '../organizationId.js';

let counter = 0;

// An invoice raised for a member. `status` is what decides whether the
// member's billing page shows it — drafts and voids stay hidden.
export async function givenAnInvoice(member, attributes = {}) {
  assertTestDatabase();

  const id = randomUUID();
  const { status = 'sent' } = attributes;

  counter += 1;
  const number = `E2E-${Date.parse('2026-01-01')}-${counter}`;

  await database().query(
    `insert into invoice (id, organization_id, contact_id, number, status,
       subtotal_cents, tax_cents, total_cents)
     values ($1, $2, $3, $4, $5, 10000, 0, 10000)`,
    [id, ORGANIZATION_ID, member.contactId, number, status]
  );

  return { id, number, status };
}
