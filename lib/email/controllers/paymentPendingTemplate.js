// Sent the moment someone registers but hasn't paid: their link to finish
// and how long the seat is held before it's released. Distinct from the
// daily payment_followup nudge — this one goes out immediately.
export const PAYMENT_PENDING = {
  template_key: 'payment_pending',
  subject: 'Finish paying to hold your {{cohort_name}} seat',
  body: [
    'Hi {{first_name}},',
    'Thanks for registering for {{cohort_name}}! Your seat is held for ' +
      '{{hold_hours}} hours while you complete payment — after that it is ' +
      'released for someone else.',
    'Complete your payment here:\n{{pay_url}}',
    'See you soon,\nThe Execution Lab'
  ].join('\n\n')
}
