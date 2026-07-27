const userStory = {
  id: 'US-62',
  implemented: 'partial',
  gaps: [
    'The balance is not charged yet — no scheduler takes it.',
    'A declined charge has no retry, email or staff surface.',
    'The roster does not mark a part-paid seat.'
  ],
  role: 'Client',
  title: 'Pay a Fundamentals seat in two installments',
  story:
    'As a prospective client, I can pay half of a Fundamentals seat now ' +
    'and have the other half charged automatically mid-cohort, so that ' +
    'the price is not a barrier and I never forget a second payment.',
  behaviours: [
    'Only a cohort with the plan switched on offers the choice.',
    'The terms are stated before I pay: amount, date and same card.',
    'The second charge falls on the 4th Monday on or after the start.',
    'The single discount covers the seat and splits across both halves.',
    'Paying the deposit holds my seat exactly like paying in full.',
    'The balance is charged automatically, with nothing for me to do.',
    'The balance is the price less everything Stripe captured.',
    'A declined charge emails me a link to pay it and retries.',
    'Until both charges succeed the seat reads as part-paid.',
    'Revenue counts only captured money, never the scheduled half.',
    'Staff see both charges and the scheduled one on the registration.'
  ]
};

export default userStory;
