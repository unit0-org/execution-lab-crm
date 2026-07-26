import { randomUUID } from 'node:crypto';
import { database, assertTestDatabase } from '../connect.js';

// Grant a member access to one portal tool.
export async function givenAToolGrant(contactId, toolKey) {
  assertTestDatabase();

  await database().query(
    `insert into portal_tool_access (id, contact_id, tool_key)
       values ($1, $2, $3)`,
    [randomUUID(), contactId, toolKey]
  );

  return toolKey;
}
