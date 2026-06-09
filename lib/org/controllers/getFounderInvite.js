import { FounderInvite } from '../models'

// The invite for a token as a plain object, or null.
export function getFounderInvite(token) {
  return FounderInvite.findOne({ where: { token } })
    .then((invite) => (invite ? invite.toJSON() : null))
}
