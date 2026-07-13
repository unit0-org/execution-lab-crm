const userStory = {
  id: 'US-44',
  implemented: true,
  role: 'Staff',
  title: 'Connect Google accounts',
  story:
    'As a staff member, I can connect Google accounts for calendar and ' +
    'contacts, so that sync has something to pull from.',
  behaviours: [
    'The first connected account becomes primary; exactly one is primary at ' +
      'a time.',
    'Reconnecting refreshes the token without creating a duplicate.',
    'Disconnecting keeps the contacts and data already pulled in.'
  ]
};

export default userStory;
