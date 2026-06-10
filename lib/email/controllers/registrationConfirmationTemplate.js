// Default registration confirmation email (to the founder after payment).
export const REGISTRATION_CONFIRMATION = {
  template_key: 'registration_confirmation',
  subject: 'You are in: {{cohort_name}}',
  body: [
    '<p>Hi {{first_name}},</p>',
    '<p>Your spot in <strong>{{cohort_name}}</strong> is confirmed.</p>',
    '<p>We start on {{start_date}}. Amount paid: {{price}}.</p>',
    '<p>See you soon,<br/>The Execution Lab</p>'
  ].join('')
}
