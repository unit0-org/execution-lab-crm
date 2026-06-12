// Default internal team alert when someone new joins the waitlist.
export const WAITLIST_TEAM_NOTIFICATION = {
  template_key: 'waitlist_team_notification',
  subject: 'New waitlist signup: {{first_name}} {{last_name}}',
  body: [
    '{{first_name}} {{last_name}} joined the waitlist — {{email}}.',
    'Business: {{business}}',
    'Challenge: {{challenge}}'
  ].join('\n\n')
}
