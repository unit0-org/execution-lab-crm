const userStory = {
  id: 'US-7',
  implemented: true,
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
      "records but doesn't notify.",
    'The "What we know" panel starts collapsed, previewing the first 3 ' +
      'facts as compact inline rows rather than cards.',
    'Expanding the panel reveals every fact in the full card layout, ' +
      'exactly as it reads today.',
    'Notes read as an inline list — body and date per row — never as cards.'
  ]
};

export default userStory;
