// Default internal team alert when someone new joins the waitlist.
export const WAITLIST_TEAM_NOTIFICATION = {
  template_key: 'waitlist_team_notification',
  subject: 'New waitlist signup: {{first_name}} {{last_name}}',
  body: [
    '<p>{{first_name}} {{last_name}} joined the waitlist',
    ' &mdash; {{email}}.</p>',
    '<p><strong>Business:</strong> {{business}}</p>',
    '<p><strong>Challenge:</strong> {{challenge}}</p>'
  ].join('')
}
