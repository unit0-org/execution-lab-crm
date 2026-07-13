const userStory = {
  id: 'US-41',
  implemented: true,
  role: 'Staff',
  title: 'Enrich contacts from a transcript',
  story:
    'As a staff member, I can apply a meeting transcript to enrich contacts ' +
    'and notes, so that insights from calls land in the CRM.',
  behaviours: [
    'A transcript applies all-or-nothing — a mid-way failure writes ' +
      'nothing.',
    "Facts are dated to the meeting, not to import time; re-runs don't move " +
      'that date.',
    'Contacts are matched by email, then full name, else created; ' +
      "re-running doesn't duplicate.",
    'A dry-run previews everything and rolls back.'
  ]
};

export default userStory;
