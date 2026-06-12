// Default internal team alert email (on a new registration).
export const TEAM_NOTIFICATION = {
  template_key: 'team_notification',
  subject: 'New registration: {{first_name}} {{last_name}}',
  body: [
    'New registration for {{cohort_name}}.',
    '{{first_name}} {{last_name}} — {{email}}'
  ].join('\n\n')
}
