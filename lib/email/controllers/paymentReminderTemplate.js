// Default nudge to a registrant who has not completed payment yet.
export const PAYMENT_REMINDER = {
  template_key: 'payment_reminder',
  subject: 'Complete your registration for {{cohort_name}}',
  body: [
    'Hi {{first_name}},',
    'Your spot in {{cohort_name}} is not yet confirmed — payment is ' +
      'still pending.',
    'Complete your payment to lock it in:\n{{pay_url}}',
    'See you soon,\nThe Execution Lab'
  ].join('\n\n')
}
