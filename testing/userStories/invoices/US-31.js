const userStory = {
  id: 'US-31',
  implemented: 'partial',
  gaps: [
    'Two invoices reserving a number at the same instant get ' +
      'distinct numbers.'
  ],
  role: 'Staff',
  title: 'Create an invoice with line items',
  story:
    'As a staff member, I can build an invoice with line items and correct ' +
    'totals, so that I can bill a client.',
  behaviours: [
    'Invoice numbers are sequential and unique per organization; the same ' +
      'number may exist in another org.',
    'Totals compute as subtotal + rounded tax; zero tax means total equals ' +
      'subtotal.',
    'Amounts entered as text parse sensibly ("$1,250.00", "99.99"), strip ' +
      'negatives, and treat garbage as 0.',
    'An invoice bills either a person or a company (mutually exclusive); ' +
      'billing a company fills the bill-to from the company.',
    'Two invoices reserving a number at the same instant get distinct ' +
      'numbers.'
  ]
};

export default userStory;
