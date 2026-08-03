// Sent when a team member reserves a seat for someone: their place is
// genuinely held, here is the link that completes it, and here is the day
// it is released if they don't. Reviewed and editable before it goes out,
// so this is the starting point rather than the final wording.
export const SEAT_RESERVED = {
  template_key: 'seat_reserved',
  subject: 'Your seat on {{cohort_name}} is reserved',
  body: [
    'Hi {{first_name}},',
    'I have reserved you a seat on {{cohort_name}}. It is held for you ' +
      'for the next {{hold_days}} days — until {{release_date}} — after ' +
      'which it is released for someone else.',
    'Complete your registration here:\n{{register_url}}',
    'Looking forward to having you,\nThe Execution Lab'
  ].join('\n\n')
}
