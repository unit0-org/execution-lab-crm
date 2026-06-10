// Default nudge to a registrant who has not completed payment yet.
export const PAYMENT_REMINDER = {
  template_key: 'payment_reminder',
  subject: 'Complete your registration for {{cohort_name}}',
  body: [
    '<p>Hi {{first_name}},</p>',
    '<p>Your spot in <strong>{{cohort_name}}</strong> is not yet ',
    'confirmed — payment is still pending.</p>',
    '<p><a href="{{pay_url}}">Complete your payment</a> to lock it ',
    'in.</p>',
    '<p>See you soon,<br/>The Execution Lab</p>'
  ].join('')
}
