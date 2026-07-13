const userStory = {
  id: 'US-38',
  implemented: true,
  role: 'System',
  title: 'Sync meetings from Google Calendar',
  story:
    'As the system, I pull meetings from a connected Google Calendar, so ' +
    'that the CRM reflects real meetings automatically.',
  behaviours: [
    'Sync is throttled to once an hour and looks back 90 days.',
    'Events with only yourself (no other attendees) are skipped.',
    'An untitled event falls back to "Untitled meeting".'
  ]
};

export default userStory;
