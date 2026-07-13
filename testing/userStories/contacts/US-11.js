const userStory = {
  id: 'US-11',
  role: 'Staff',
  title: 'Bulk-delete and search contacts',
  story:
    'As a staff member, I can select many contacts to delete and search the ' +
    'list, so that I can manage large numbers of people.',
  behaviours: [
    'Bulk delete is recoverable (a soft delete) — unlike merge, which is ' +
      'permanent.',
    'Deleting an empty selection does nothing.',
    'Search matches on both name and email; a blank search behaves ' +
      'predictably.'
  ]
};

export default userStory;
