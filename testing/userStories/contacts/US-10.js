const userStory = {
  id: 'US-10',
  role: 'Staff',
  guarantee: true,
  title: "A contact's timeline shows every kind of activity",
  story:
    'As a staff member, I can see one reverse-chronological timeline per ' +
    'contact, so that I understand everything that has happened with them ' +
    'at a glance.',
  behaviours: [
    'Events, meetings, purchases and cohort registrations all appear, ' +
      'newest first.',
    'Only people who registered or checked in for an event show — mere ' +
      'invitees are excluded.',
    'A contact with no activity shows an empty state, not an error.',
    'Any new kind of per-contact record also appears in this timeline.'
  ]
};

export default userStory;
