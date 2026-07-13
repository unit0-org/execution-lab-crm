const userStory = {
  id: 'US-33',
  role: 'System',
  guarantee: true,
  title: 'Every invoice email CCs the office, once',
  story:
    'As the business, I need a copy of every outgoing invoice, without ever ' +
    'double-CCing, so that we keep a reliable billing trail.',
  behaviours: [
    'The office address is added as CC on every send.',
    "It's not added twice if the recipient or existing CC already includes " +
      'it (case-insensitive).',
    'This works whether CC is a single address or a list.'
  ]
};

export default userStory;
