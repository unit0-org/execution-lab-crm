// Default waitlist confirmation email (when someone joins the waitlist).
export const WAITLIST_CONFIRMATION = {
  template_key: 'waitlist_confirmation',
  subject: 'You are on the waitlist',
  body: [
    'Hi {{first_name}},',
    'You are on the waitlist. We will email you the moment a spot opens.',
    'The Execution Lab'
  ].join('\n\n')
}
