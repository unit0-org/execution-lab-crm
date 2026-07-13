import { isBlank } from './isBlank'
import { birthdayBackfill } from './birthdayBackfill'

const FIELDS = ['first_name', 'last_name', 'linkedin_url', 'photo_url']

// Which of the winner's own columns the losers can fill in. A value the
// winner already holds always stands — only a blank is filled, and from the
// first loser that has one.
export function profileBackfill(winner, losers) {
  const patch = birthdayBackfill(winner, losers)

  for (const field of FIELDS) {
    if (!isBlank(winner[field])) continue

    const source = losers.find((loser) => !isBlank(loser[field]))

    if (source) patch[field] = source[field]
  }

  return patch
}
