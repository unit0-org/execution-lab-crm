// Default registration confirmation email (to the founder after payment).
export const REGISTRATION_CONFIRMATION = {
  template_key: 'registration_confirmation',
  subject: 'You are in: {{cohort_name}}',
  body: [
    'Hi {{first_name}},',
    'Your spot in {{cohort_name}} is confirmed.',
    'We start on {{start_date}}. Amount paid: {{price}}.',
    'See you soon,\nThe Execution Lab'
  ].join('\n\n')
}
