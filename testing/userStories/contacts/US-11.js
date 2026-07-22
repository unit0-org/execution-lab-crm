const userStory = {
  id: 'US-11',
  implemented: true,
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
      'predictably.',
    'The command-palette search also finds companies by name, opening the ' +
      'company page.',
    'On mobile the search panel opens at the top of the screen, not ' +
      'vertically centered.',
    'The contacts list paginates at 25 per page, with a selectable page ' +
      'size.'
  ]
};

export default userStory;
