const userStory = {
  id: 'US-37',
  role: 'Staff',
  title: 'Create and manage meetings',
  story:
    'As a staff member, I can create meetings and manage who attended, so ' +
    'that conversations are on the record.',
  behaviours: [
    'Deleting a meeting is recoverable (a soft delete).',
    'Adding the same person twice results in one participant; adding by a ' +
      'new email creates a contact.',
    "A deleted synced meeting doesn't collide with its calendar event on " +
      'the next sync.'
  ]
};

export default userStory;
