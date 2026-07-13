const userStory = {
  id: 'US-35',
  role: 'System',
  title: 'Sync purchases & classify customers',
  story:
    'As the system, I pull Stripe purchases and decide who’s a customer, so ' +
    'that the pipeline separates leads from paying customers.',
  behaviours: [
    'A contact is a customer if any single purchase is $100+ or they have ' +
      'any paid registration.',
    'A comped ($0) seat still makes someone a customer; $99.99 alone stays ' +
      'a lead.',
    'A charge with no email is skipped; re-syncing refreshes a purchase ' +
      '(e.g. to refunded).',
    'Refunds are counted consistently across every revenue figure.'
  ]
};

export default userStory;
