const userStory = {
  id: 'US-65',
  implemented: true,
  role: 'Staff',
  title: 'Score and segment leads',
  story:
    'As a staff member, I want contacts scored and segmented by how ' +
    'engaged they are, so that the weekly digest and the assistant can ' +
    'tell me who to follow up.',
  behaviours: [
    'A customer is anyone with a $100+ purchase or a paid registration; a ' +
      "comped seat counts, $99.99 alone doesn't.",
    'Lead score blends purchases, check-ins and meetings, weighted by how ' +
      'recent they are.',
    '"Hot leads" are the top non-customers with a score above zero; ' +
      'segments group the rest.',
    'A contact whose every label is excluded-from-leads drops out of the ' +
      'pipeline.',
    'The scoring reaches me through the weekly digest email and the ' +
      'assistant tool; it no longer has a page of its own.'
  ]
};

export default userStory;
