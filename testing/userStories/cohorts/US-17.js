const userStory = {
  id: 'US-17',
  implemented: true,
  role: 'System',
  title: 'Confirm a paid checkout',
  story:
    'As the system, I confirm a registration when Stripe reports payment, ' +
    'so that enrolment, emails and waitlist all follow automatically.',
  behaviours: [
    'A replayed or duplicate payment notification does nothing the second ' +
      'time.',
    'An unknown checkout is ignored; a missing or invalid signature is ' +
      'rejected.',
    'Confirmation email and waitlist conversion are best-effort — a failure ' +
      'there never undoes the payment.'
  ]
};

export default userStory;
