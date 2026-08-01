// A participation that records nothing but an invitation. Luma lets you
// invite hundreds of people at once, and importing them buried the people
// who actually did something under thousands of rows — 85% of the table.
// An invite is not a relationship: it says what we did, not what they did.
//
// This is the single definition, used twice over: intake refuses to import
// a guest who matches it, and the backfill deleted the rows that already
// did. Anyone who acted — registered, joined the waitlist, said they're
// not coming, or turned up — never matches, whatever else is on the row.
export function isInviteOnly(participant) {
  if (!participant?.invited_at) return false

  return !participant.registered_at && !participant.waitlisted_at &&
    !participant.not_going_at && !participant.checked_in_at
}
