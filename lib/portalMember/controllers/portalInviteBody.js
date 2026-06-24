import { portalUrl } from '@/lib/portal/portalUrl'

const firstName = (name) => (name || '').trim().split(/\s+/)[0] || 'there'

// Plain-text invite body with the portal sign-in link. textToHtml turns
// blank lines into paragraphs, so keep paragraphs separated by \n\n.
export function portalInviteBody(displayName) {
  return [
    `Hi ${firstName(displayName)},`,
    'You now have access to The Execution Lab member portal — your ' +
      'billing, cohort notes, recordings and resources in one place.',
    `Sign in here:\n${portalUrl('/signin')}`,
    'See you inside,\nThe Execution Lab'
  ].join('\n\n')
}
