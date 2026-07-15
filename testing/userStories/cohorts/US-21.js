const userStory = {
  id: 'US-21',
  implemented: 'partial',
  gaps: [
    'A cohort can be created with a capacity of exactly 0.'
  ],
  role: 'Staff',
  title: 'Manage cohorts, status & resources',
  story:
    'As a staff member, I can create and edit cohorts, open/close them, and ' +
    'attach resources, so that programs run on schedule.',
  behaviours: [
    'A cohort needs a name and start date; the open date must be before the ' +
      'close date.',
    'Only "open" cohorts take registrations or advance the waitlist.',
    'The registration roster shows what each registrant paid; an unpaid ' +
      'seat reads as a dash, not $0.',
    "Members see a cohort's resources only if they hold a confirmed seat; " +
      'recordings embed as video.',
    'A cohort can be created with a capacity of exactly 0.'
  ]
};

export default userStory;
