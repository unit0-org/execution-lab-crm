const userStory = {
  id: 'US-50',
  implemented: true,
  role: 'System',
  guarantee: true,
  title: 'New data tables are private & migrations are unique',
  story:
    'As the business, I need every new data table to be private by default ' +
    'and every migration to be unique, so that we never accidentally expose ' +
    'data or break a deploy.',
  behaviours: [
    'Every new public table turns on row-level security (deny-all) so the ' +
      "public key can't read it.",
    'Migration version numbers are unique — a duplicate breaks every ' +
      'deploy.'
  ]
};

export default userStory;
