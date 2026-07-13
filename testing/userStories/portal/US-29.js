const userStory = {
  id: 'US-29',
  implemented: true,
  role: 'Owner',
  title: 'Have full access to everything',
  story:
    'As an owner, I can open every cohort and every tool, so that I can ' +
    'support and demo the whole portal.',
  behaviours: [
    'An allow-listed owner email unlocks all resources and tools without ' +
      'needing a membership record.',
    'An owner with no matching contact still loads billing empty — no ' +
      'crash.'
  ]
};

export default userStory;
