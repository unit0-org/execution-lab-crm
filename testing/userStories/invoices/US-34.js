const userStory = {
  id: 'US-34',
  role: 'System',
  title: 'Auto-invoice a Stripe purchase',
  story:
    'As the system, I turn a completed Stripe charge into a paid receipt, ' +
    'so that customers get billing without manual work.',
  behaviours: [
    'A receipt is created only when auto-create is on, then approved, ' +
      'marked paid, and optionally sent.',
    'A duplicate charge notification returns the existing invoice rather ' +
      'than making a second.',
    'Two charges in the same second get distinct receipt numbers.'
  ]
};

export default userStory;
