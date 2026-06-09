import { mapPerson } from './mapPerson'
import { accumulateConnections } from './accumulateConnections'

const EXPIRED = { people: [], nextSyncToken: null, expired: true }

const usable = (p) =>
  p.firstName || p.lastName || p.emails.length || p.phones.length

// All connections (following pagination), mapped to the CRM shape.
// A 410 means the sync token expired → caller must full-resync.
export async function listConnections(accessToken, syncToken) {
  try {
    const raw = await accumulateConnections(accessToken, syncToken)
    const people = raw.people.map(mapPerson).filter(usable)

    return { people, nextSyncToken: raw.nextSyncToken, expired: false }
  } catch (err) {
    if (err.status === 410) return EXPIRED

    throw err
  }
}
