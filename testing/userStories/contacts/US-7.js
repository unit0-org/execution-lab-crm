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
    'Re-adding a fact with an existing label does not overwrite its value.',
    'A note must have a body and keeps its own date, separate from when it ' +
      'was created.',
    'Mentioning a teammate in a note notifies them; mentioning yourself ' +
      "records but doesn't notify.",
    'The "What we know" panel starts collapsed, previewing the first 3 ' +
      'facts as compact inline rows rather than cards.',
    'Expanding the panel reveals every fact in the full card layout.',
    'Notes read as an inline comment thread, never as cards: each shows its ' +
      "author's avatar and name, and how long ago it was written.",
    'A note written through the assistant (MCP) is attributed to the team ' +
      'member whose integration wrote it; notes that predate authorship ' +
      'read as the workspace owner.'
  ]
};

export default userStory;
