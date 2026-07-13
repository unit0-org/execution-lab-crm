const userStory = {
  id: 'US-39',
  role: 'System',
  title: 'Match transcripts to the right meeting',
  story:
    'As the system, I attach a transcript to its calendar meeting, so that ' +
    "notes and calendar entries don't split into duplicates.",
  behaviours: [
    'Same title and same minute is adopted automatically; same title, ' +
      'different minute raises a suggestion.',
    'A meeting within 2 hours sharing a person is adopted if within 15 ' +
      'minutes, otherwise suggested.',
    'A transcript never silently attaches to the wrong meeting — an ' +
      'uncertain match raises a suggestion instead.'
  ]
};

export default userStory;
