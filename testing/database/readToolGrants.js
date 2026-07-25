import { database } from './connect.js';

// The tool keys a member holds, so a test can prove an unrelated change
// left them alone.
export async function readToolGrants(contactId) {
  const { rows } = await database().query(
    'select tool_key from portal_tool_access where contact_id = $1',
    [contactId]
  );

  return rows.map((row) => row.tool_key);
}
