const userStory = {
  id: 'US-30',
  implemented: 'partial',
  gaps: [
    'The invoice-PDF column is restricted to the owner or staff ' +
      'in every row.'
  ],
  role: 'Reference',
  title: 'The full authorization matrix',
  story:
    'As the business, I want one table showing what each kind of visitor ' +
    'can reach, so that the access rules are clear.',
  behaviours: [
    'Each row is a behaviour to verify, including the revoked-by-URL and ' +
      'staff↔portal crossovers.',
    'The invoice-PDF column is restricted to the owner or staff in every ' +
      'row.'
  ]
};

export default userStory;
