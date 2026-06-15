// Automatic follow-up to a registrant who filled the form but never
// finished paying. Sent once by the daily cron with their payment link.
export const PAYMENT_FOLLOWUP = {
  template_key: 'payment_followup',
  subject: 'Your spot in {{cohort_name}} is almost yours',
  body: [
    'Hi {{first_name}},',
    'Thanks for registering for {{cohort_name}}! Your payment is not ' +
      'finished yet, so your spot is not locked in.',
    'Complete it whenever you are ready:\n{{pay_url}}',
    'See you soon,\nThe Execution Lab'
  ].join('\n\n')
}
