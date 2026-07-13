const userStory = {
  id: 'US-22',
  implemented: true,
  role: 'Client',
  title: 'Browse programs on the public site',
  story:
    'As a prospective client, I can browse programs with correct pricing ' +
    'and availability, so that I can choose one to join.',
  behaviours: [
    'A sold-out cohort still shows during a grace period after it starts.',
    'The featured spot picks the first buyable cohort, else the first ' +
      'sold-out one.',
    'A discount code in the link carries through to checkout; an invalid ' +
      'one is silently dropped.'
  ]
};

export default userStory;
