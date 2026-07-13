const userStory = {
  id: 'US-13',
  role: 'Client',
  title: 'Register and pay for a cohort',
  story:
    'As a prospective client, I can fill in the form and pay for a seat, so ' +
    "that I'm enrolled in a program.",
  behaviours: [
    'All required fields (email, LinkedIn, business, stage, obstacle, ' +
      'commitment, name) must be filled; blank-only fields count as empty.',
    'A full cohort sends me to the waitlist unless I hold a valid invite ' +
      'link.',
    'My registration, contact and facts are saved before payment — even if ' +
      'I never pay.',
    'My seat is held for 2 hours while I complete checkout.'
  ]
};

export default userStory;
