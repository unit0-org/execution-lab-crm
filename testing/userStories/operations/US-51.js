const userStory = {
  id: 'US-51',
  implemented: true,
  role: 'System',
  guarantee: true,
  title: 'Re-running any sync or import never duplicates',
  story:
    'As the business, I need every sync, import and webhook to be safe to ' +
    're-run, so that retries and replays converge instead of piling up ' +
    'copies.',
  behaviours: [
    'Every import and sync is keyed on a stable identifier so re-running ' +
      'finds-or-updates rather than creating anew.',
    'Replaying a payment or charge notification produces no second record.',
    'A record with no stable identifier at all is refused rather than ' +
      'created, so it cannot return as a fresh copy on every run.'
  ]
};

export default userStory;
