const userStory = {
  id: 'US-68',
  implemented: true,
  role: 'Staff',
  title: 'See what is owed and filter invoices by status',
  story:
    'As a staff member, I can filter the invoice list by status and see the ' +
    'total still owed, so that I know what to chase without adding it up.',
  behaviours: [
    'The list filters to one status (draft, approved, sent, paid, void) or ' +
      'to Unpaid; no chip shows every invoice.',
    'The chosen filter lives in the URL, so it survives a refresh and can ' +
      'be linked to.',
    '"Unpaid" means approved or sent — a draft was never issued and a void ' +
      'invoice never will be, so neither is owed.',
    'The pending-payments total sums those unpaid invoices and is hidden ' +
      'when nothing is outstanding; clicking it opens the Unpaid filter.',
    'The total covers the whole list, not just the rows the active filter ' +
      'leaves visible, and moves when an invoice is marked paid.',
    'A bulk selection only ever acts on rows the active filter shows.'
  ]
};

export default userStory;
