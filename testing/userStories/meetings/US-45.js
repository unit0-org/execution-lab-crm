const userStory = {
  id: 'US-45',
  implemented: true,
  role: 'System',
  title: 'Sync contacts with Google both ways',
  story:
    'As the system, I sync contacts to and from Google, so that both stay ' +
    'in step without clobbering each other.',
  behaviours: [
    'Each run pushes at most a set number of writes and resumes where it ' +
      'left off next run.',
    'Only the primary account pushes outward; conflicting values are ' +
      'recorded, not overwritten.',
    'A person deleted in Google keeps their CRM contact (just unlinked).'
  ]
};

export default userStory;
