import { contactInOrg } from './contactInOrg'
import { relationshipTypeInOrg } from './relationshipTypeInOrg'

// Verify both contacts (and the type, when given) exist.
export async function relationshipEnds(fromId, toId, typeId) {
  const fromOk = await contactInOrg(fromId)
  const toOk = await contactInOrg(toId)

  if (!fromOk || !toOk) return { error: 'Not allowed' }

  if (typeId && !await relationshipTypeInOrg(typeId)) {
    return { error: 'Not allowed' }
  }

  return { ok: true }
}
