import { findTitleMatch } from './findTitleMatch'
import { findPeopleMatch } from './findPeopleMatch'

// Match a synced Google event to an existing un-synced row: by title
// first (exact refresh / likely suggest), else by a shared participant
// near the same time (tight = adopt, loose = suggest).
export async function findMeetingMatch(meeting, contactIds) {
  const byTitle = await findTitleMatch(meeting)

  if (byTitle) return byTitle

  return findPeopleMatch(meeting, contactIds)
}
