const userStory = {
  id: 'US-16',
  implemented: true,
  role: 'Client',
  title: 'Earn early-bird pricing',
  story:
    'As a prospective client, I can earn a lower price by signing up ' +
    'before registration opens, so that acting early is rewarded.',
  behaviours: [
    'The 20% early-bird reward is earned only by registering before the ' +
      'registration window opens.',
    'Once registration opens the cohort sells at its regular price, ' +
      'however many seats are still free.',
    'The reward is locked to when I registered — paying later still ' +
      'honours it.'
  ]
};

export default userStory;
