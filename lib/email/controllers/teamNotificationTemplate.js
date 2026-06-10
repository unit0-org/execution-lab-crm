// Default internal team alert email (on a new registration).
export const TEAM_NOTIFICATION = {
  template_key: 'team_notification',
  subject: 'New registration: {{first_name}} {{last_name}}',
  body: [
    '<p>New registration for <strong>{{cohort_name}}</strong>.</p>',
    '<p>{{first_name}} {{last_name}} &mdash; {{email}}</p>'
  ].join('')
}
