const userStory = {
  id: 'US-7',
  role: 'Staff',
  title: 'Record facts and notes on a contact',
  story:
    'As a staff member, I can capture structured facts and free-text notes, ' +
    'so that context lives on the person.',
  behaviours: [
    'A fact must have a value; its label is optional.',
    'Re-adding a fact with a label that already exists does not overwrite ' +
      'the old value.',
    'A note must have a body and keeps its own date, separate from when it ' +
      'was created.',
    'Mentioning a teammate in a note notifies them; mentioning yourself ' +
      "records but doesn't notify."
  ]
};

export default userStory;
