const EMPTY = { first_name: '', last_name: '', email: '' }

// Flatten an optional invite into a safe { token, prefill } with blank
// defaults — so an absent invite changes nothing on the register form.
export function inviteDefaults(invite) {
  const prefill = invite?.prefill || EMPTY

  return {
    token: invite?.token || '',
    first_name: prefill.first_name || '',
    last_name: prefill.last_name || '',
    email: prefill.email || ''
  }
}
