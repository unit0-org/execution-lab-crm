import { findContactIdByEmail } from './findContactIdByEmail'

// Candidate contact ids for the ±2h bridge match: the ids given directly
// plus any resolved from the given emails.
export async function meetingContactIds(input, t) {
  const ids = [...(input.contactIds || [])]

  for (const email of input.emails || []) {
    const id = await findContactIdByEmail(email, t)

    if (id) ids.push(id)
  }

  return ids
}
