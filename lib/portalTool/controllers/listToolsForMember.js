import { PortalToolAccess } from '../models'
import { findPortalTool } from '../tools'

// The tools a member may use: their granted keys mapped to the code-defined
// tool metadata. Unknown keys (a removed tool) are dropped.
export async function listToolsForMember(contactId) {
  const keys = await PortalToolAccess.keysForContact(contactId)

  return keys.map(findPortalTool).filter(Boolean)
}
