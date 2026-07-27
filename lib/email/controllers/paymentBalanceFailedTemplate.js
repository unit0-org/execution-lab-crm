// Sent when the payment plan's second half is refused by the card on
// file. It carries a link so the registrant can settle it themselves; we
// also keep retrying the card for a few days.
export const PAYMENT_BALANCE_FAILED = {
  template_key: 'payment_balance_failed',
  subject: 'We could not take your {{cohort_name}} balance',
  body: [
    'Hi {{first_name}},',
    'We tried to charge the remaining {{amount}} for {{cohort_name}} to ' +
      'the card you used to register, and your bank turned it down. ' +
      'Nothing is wrong with your spot — we just need the payment.',
    'You can pay it here in a minute:\n{{balance_url}}',
    'If it is easier, we will try the same card again over the next few ' +
      'days. Reply to this email if you would rather sort it another way.',
    'Thank you,\nThe Execution Lab'
  ].join('\n\n')
}
