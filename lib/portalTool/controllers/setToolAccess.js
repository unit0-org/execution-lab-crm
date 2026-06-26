import { PortalToolAccess } from '../models'
import { isPortalToolKey } from '../tools'

// Grant or revoke one tool for one contact (the admin toggle). Refuses an
// unknown key rather than storing a dangling grant.
export async function setToolAccess(contactId, toolKey, enabled) {
  if (!isPortalToolKey(toolKey)) return { error: 'Unknown tool' }

  if (enabled) await PortalToolAccess.grant(contactId, toolKey)
  else await PortalToolAccess.revoke(contactId, toolKey)

  return { contactId, toolKey, enabled }
}
