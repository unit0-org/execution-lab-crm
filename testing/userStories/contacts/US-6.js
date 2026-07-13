const userStory = {
  id: 'US-6',
  role: 'Staff',
  title: 'Organize contacts with categories',
  story:
    'As a staff member, I can label contacts and filter by those labels, so ' +
    'that I can group people (VIP, Newsletter, …).',
  behaviours: [
    'A contact can hold many labels; label names are unique.',
    'Filtering by several labels requires a contact to have all of them; a ' +
      '"no labels" filter finds unlabelled people.',
    'Deleting a label removes it from everyone but keeps the people.',
    'Toggling a label’s "count toward leads" changes who appears in the ' +
      'leads pipeline.',
    'Adding a label to many contacts skips ones already labelled and ' +
      'ignores unknown ids.'
  ]
};

export default userStory;
