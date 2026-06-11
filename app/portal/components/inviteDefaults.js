// Flatten an optional invite into safe { token, full_name, email }
// defaults — so an absent invite changes nothing on the register form.
export function inviteDefaults(invite) {
  const prefill = invite?.prefill || {}
  const fullName = [prefill.first_name, prefill.last_name]
    .filter(Boolean).join(' ')

  return {
    token: invite?.token || '',
    full_name: fullName,
    email: prefill.email || ''
  }
}
