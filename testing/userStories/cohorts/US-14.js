const userStory = {
  id: 'US-14',
  role: 'System',
  guarantee: true,
  title: '"A taken seat" means the same thing everywhere',
  story:
    'As the business, I need every count of taken seats to agree, so that ' +
    'capacity, "sold out", stats and the waitlist never disagree.',
  behaviours: [
    "A seat counts as taken when it's paid, or pending within its 2-hour " +
      'hold.',
    'When a hold lapses, the seat frees up in every screen at the same ' +
      'instant.',
    'A manually-marked-paid seat counts as filled but adds $0 revenue.',
    "A registration paid after its hold lapsed doesn't silently overfill " +
      'the cohort.'
  ]
};

export default userStory;
