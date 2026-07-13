const userStory = {
  id: 'US-16',
  role: 'Client',
  title: 'Earn early-bird / pre-registration pricing',
  story:
    'As a prospective client, I can earn a lower price for signing up ' +
    'early, so that acting fast is rewarded.',
  behaviours: [
    'Pre-registration pricing applies during the waitlist phase; early-bird ' +
      'applies to the first two in-window seats.',
    'The reward is locked to when I registered — paying later still honours ' +
      'it.',
    "Lapsed holds don't use up the early-bird allowance."
  ]
};

export default userStory;
