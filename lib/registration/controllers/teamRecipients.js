const FALLBACK = ['abel@theexecutionlab.ca', 'assistant@theexecutionlab.ca']

// The internal team addresses alerted on a new registration. Override
// with REGISTRATION_TEAM_EMAILS (comma-separated).
export function teamRecipients() {
  const raw = process.env.REGISTRATION_TEAM_EMAILS

  if (!raw) return FALLBACK

  return raw.split(',').map((email) => email.trim()).filter(Boolean)
}
