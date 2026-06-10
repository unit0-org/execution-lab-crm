// Default waitlist confirmation email (when someone joins the waitlist).
export const WAITLIST_CONFIRMATION = {
  template_key: 'waitlist_confirmation',
  subject: 'You are on the waitlist',
  body: [
    '<p>Hi {{first_name}},</p>',
    '<p>You are on the waitlist. We will email you the moment',
    ' a spot opens.</p>',
    '<p>The Execution Lab</p>'
  ].join('')
}
