// Default waitlist priority email (when a spot opens; has a register link).
export const WAITLIST_PRIORITY = {
  template_key: 'waitlist_priority',
  subject: 'A spot opened in {{cohort_name}}',
  body: [
    'Hi {{first_name}},',
    'A spot just opened in {{cohort_name}}.',
    'Register now to claim it:\n{{register_url}}',
    'The Execution Lab'
  ].join('\n\n')
}
