import { OrganizationUser } from '../models'

// The org member behind an email, shaped as an actor so a non-browser write
// path (the MCP integration) can attribute what it writes to a real person.
// Null when the email is unknown or the invite was never claimed.
export async function memberActorByEmail(email) {
  if (!email) return null

  const row = await OrganizationUser.findOne({ where: { email } })

  if (!row || !row.user_id) return null

  return {
    actorUserId: row.user_id,
    actorName: row.display_name || row.email
  }
}
