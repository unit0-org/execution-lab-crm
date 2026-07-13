const userStory = {
  id: 'US-19',
  implemented: true,
  role: 'Staff',
  title: 'Send payment reminders & follow-ups',
  story:
    "As a staff member, I can nudge people who registered but haven't paid, " +
    'so that fewer seats are left unpaid.',
  behaviours: [
    'A reminder skips anyone who has already paid.',
    'The daily follow-up targets unpaid registrations 1–14 days old, once ' +
      'each.',
    'A resumed pay link mints a fresh checkout each visit.',
    'The daily follow-up re-checks payment so it never emails someone who ' +
      'just paid.'
  ]
};

export default userStory;
