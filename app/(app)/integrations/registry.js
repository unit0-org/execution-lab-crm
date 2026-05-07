// Static catalog of integrations the panel can display. Status comes
// from runtime checks (account presence, env vars) — not from this list.
export const INTEGRATIONS = [
  { key: 'google-workspace', name: 'Google Workspace', section: 'Source of truth',
    description: 'Multi-account OAuth, Gmail, Calendar, Drive, Contacts.' },
  { key: 'google-meet',      name: 'Google Meet',      section: 'Activity',
    description: 'Conference records + transcripts via the Meet API.' },
  { key: 'google-calendar',  name: 'Google Calendar',  section: 'Activity',
    description: 'Past + upcoming events on the timeline.' },
  { key: 'google-drive',     name: 'Google Drive',     section: 'Activity',
    description: 'Doc shares + comments by contacts.' },
  { key: 'luma',             name: 'Luma',             section: 'Activity',
    description: 'RSVPs and check-ins from your hosted events.' },
  { key: 'stripe',           name: 'Stripe',           section: 'Activity',
    description: 'Customer matches by email; LTV + last payment.' },
]
