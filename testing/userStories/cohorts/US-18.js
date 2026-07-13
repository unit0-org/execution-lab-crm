const userStory = {
  id: 'US-18',
  implemented: true,
  role: 'System',
  guarantee: true,
  title: 'Registration details flow to the contact',
  story:
    'As the business, I need what someone enters when registering to land ' +
    'on their CRM contact, so that the CRM stays the single source of ' +
    'truth.',
  behaviours: [
    'Identity (email, phone, LinkedIn) updates contact fields; everything ' +
      'else becomes facts.',
    'Running the sync again never creates duplicates.',
    'The contact is tagged with the cohort.',
    'Every new registration field flows through this sync to the contact.'
  ]
};

export default userStory;
