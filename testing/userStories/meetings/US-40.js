const userStory = {
  id: 'US-40',
  implemented: true,
  role: 'Staff',
  guarantee: true,
  title: 'Merging meetings never loses data',
  story:
    'As a staff member, when I merge duplicate meetings, I need all their ' +
    'content to move to the survivor, so that cleanup is safe.',
  behaviours: [
    'Participants, notes, attachments and transcripts all move to the ' +
      'survivor.',
    "The merge can't run if one of the meetings was already deleted.",
    "Choosing the survivor among the losers can't delete the survivor."
  ]
};

export default userStory;
