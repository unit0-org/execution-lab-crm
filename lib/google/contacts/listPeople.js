import { listConnections } from '../people'

// Incremental connections for the account; on an expired sync token,
// fall back to a full re-list.
export async function listPeople(token, syncToken) {
  const res = await listConnections(token, syncToken)

  if (res.expired) return listConnections(token, null)

  return res
}
