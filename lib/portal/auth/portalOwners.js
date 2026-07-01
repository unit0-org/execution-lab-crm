const FALLBACK = ['me@osorioabel.com', 'abel@theexecutionlab.ca']

const ownerEmails = () => {
  const raw = process.env.PORTAL_OWNER_EMAILS

  if (!raw) return FALLBACK

  return raw.split(',').map((email) => email.trim().toLowerCase())
}

// Whether an email belongs to a portal owner — someone who enters the
// member area without an invite and sees every cohort and tool. Override
// the list with PORTAL_OWNER_EMAILS (comma-separated).
export function isPortalOwner(email) {
  if (!email) return false

  return ownerEmails().includes(email.toLowerCase())
}
