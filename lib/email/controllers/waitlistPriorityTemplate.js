// Default waitlist priority email (when a spot opens; has a register link).
export const WAITLIST_PRIORITY = {
  template_key: 'waitlist_priority',
  subject: 'A spot opened in {{cohort_name}}',
  body: [
    '<p>Hi {{first_name}},</p>',
    '<p>A spot just opened in <strong>{{cohort_name}}</strong>.</p>',
    '<p><a href="{{register_url}}">Register now</a> to claim it.</p>',
    '<p>The Execution Lab</p>'
  ].join('')
}
