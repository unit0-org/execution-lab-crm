import { contactInOrg } from './contactInOrg'
import { relationshipTypeInOrg } from './relationshipTypeInOrg'

// Verify both contacts (and the type, when given) belong to the org.
export async function relationshipEnds(orgId, fromId, toId, typeId) {
  const fromOk = await contactInOrg(orgId, fromId)
  const toOk = await contactInOrg(orgId, toId)

  if (!fromOk || !toOk) return { error: 'Not allowed' }

  if (typeId && !await relationshipTypeInOrg(orgId, typeId)) {
    return { error: 'Not allowed' }
  }

  return { ok: true }
}
