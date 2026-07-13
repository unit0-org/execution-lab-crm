const userStory = {
  id: 'US-20',
  implemented: 'partial',
  gaps: [
    'Two people are never invited to the same opening at once, ' +
      'even under load.'
  ],
  role: 'Client',
  title: 'Join the waitlist and get invited',
  story:
    'As a prospective client, I can join a waitlist and be invited when a ' +
    "seat opens, so that I'm not shut out of a full program.",
  behaviours: [
    'One waitlist entry per email; joining twice updates rather than ' +
      'duplicating.',
    'Only one person holds an invite at a time; it expires after 24 hours.',
    'A valid invite link lets me register even when the cohort looks full ' +
      'or closed.',
    'Two people are never invited to the same opening at once, even under ' +
      'load.'
  ]
};

export default userStory;
