import { FounderInvite } from '../models'

// All founder invites, newest first — for the platform-owner view.
export function listFounderInvites() {
  return FounderInvite.findAll({ order: [['created_at', 'DESC']] })
    .then((rows) => rows.map((row) => row.toJSON()))
}
