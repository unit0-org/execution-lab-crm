// Flatten whichever claim opened this screen into safe defaults, so no
// claim at all changes nothing on the form. Each token rides its own
// hidden field because they mean different things on submit: an invite
// converts a waitlist entry, a reservation keeps the seat it already holds.
export function claimDefaults(invite, reservation) {
  const prefill = (invite || reservation)?.prefill || {}
  const fullName = [prefill.first_name, prefill.last_name]
    .filter(Boolean).join(' ')

  return {
    invite: invite?.token || '',
    reservation: reservation?.token || '',
    full_name: fullName,
    email: prefill.email || ''
  }
}
