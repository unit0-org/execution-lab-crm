import { addRelationshipTx } from './addRelationshipTx'

// Apply every relationship, resolving from/to refs to contact ids. An edge
// whose endpoints aren't both known is skipped. Returns how many were added.
export async function applyRelationships(relationships, refToId, t) {
  let count = 0

  for (const rel of relationships || []) {
    const fromId = refToId[rel.from]
    const toId = refToId[rel.to]

    if (!fromId || !toId) continue

    count += await addRelationshipTx(fromId, toId, rel, t)
  }

  return count
}
