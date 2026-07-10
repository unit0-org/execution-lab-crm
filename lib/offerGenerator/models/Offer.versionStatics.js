import { nextVersion } from './nextVersion'

// Bump an owned offer's version by the given up/down deltas and persist it;
// returns the new { version_major, version_minor } (null if not the owner's).
export function addVersionStatics(model) {
  model.changeVersion = async function (contactId, id, dMajor, dMinor) {
    const offer = await this.getOwned(contactId, id)

    if (!offer) return null

    const next = nextVersion(offer, dMajor, dMinor)
    await offer.update({ ...next, updated_at: new Date() })

    return next
  }
}
