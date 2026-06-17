import { upsertContactWithAdds } from './upsertContactWithAdds'
import { sumCounts } from './sumCounts'

const zero = () => ({ emails: 0, phones: 0, facts: 0, contactNotes: 0 })

// Resolve every participant to a contact (applying its adds). Returns the
// ref→contact map for the result, a ref→id map for relationships, the id
// list for the meeting bridge, and the summed applied counts.
export async function resolveParticipants(participants, t) {
  const byRef = {}
  const refToId = {}
  const ids = []
  const applied = zero()

  for (const p of participants || []) {
    const c = await upsertContactWithAdds(p.identity, p.add, t)

    byRef[p.ref] = { id: c.id, created: c.created }
    refToId[p.ref] = c.id
    ids.push(c.id)
    sumCounts(applied, c.applied)
  }

  return { byRef, refToId, ids, applied }
}
