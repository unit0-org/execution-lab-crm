import { Meeting } from '../models'

// True when both meeting ids exist.
export async function verifyMeetingsExist(ids, t) {
  const count = await Meeting.count({
    where: { id: ids },
    transaction: t
  })

  return count === ids.length
}
