import { portalUrl } from '@/lib/portal/portalUrl'

const firstName = (name) => (name || '').trim().split(/\s+/)[0] || 'there'

const signInUrl = (email) =>
  portalUrl(`/signin?email=${encodeURIComponent(email)}`)

// Plain-text invite body with the portal sign-in link (email prefilled so
// the member signs in with the address they were invited at). textToHtml
// turns blank lines into paragraphs, so keep paragraphs separated by \n\n.
export function portalInviteBody(displayName, email) {
  return [
    `Hi ${firstName(displayName)},`,
    'You now have access to The Execution Lab member portal — your ' +
      'billing, cohort notes, recordings and resources in one place.',
    `Sign in here:\n${signInUrl(email)}`,
    'See you inside,\nThe Execution Lab'
  ].join('\n\n')
}
