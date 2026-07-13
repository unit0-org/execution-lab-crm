const userStory = {
  id: 'US-46',
  implemented: true,
  role: 'Staff',
  title: 'See leads, customers & hot prospects',
  story:
    'As a staff member, I can open a dashboard that scores and segments ' +
    'contacts, so that I know who to focus on.',
  behaviours: [
    'A customer is anyone with a $100+ purchase or a paid registration; a ' +
      "comped seat counts, $99.99 alone doesn't.",
    'Lead score blends purchases, check-ins and meetings, weighted by how ' +
      'recent they are.',
    '"Hot leads" are the top non-customers with a score above zero; ' +
      'segments group the rest.',
    'A contact whose every label is excluded-from-leads drops out of the ' +
      'pipeline.'
  ]
};

export default userStory;
