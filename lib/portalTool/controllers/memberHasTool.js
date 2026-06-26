import { PortalToolAccess } from '../models'

// Whether a member holds a given tool — the gate a tool page checks before
// rendering, so a revoked member can't reach it by URL.
export async function memberHasTool(contactId, toolKey) {
  const keys = await PortalToolAccess.keysForContact(contactId)

  return keys.includes(toolKey)
}
