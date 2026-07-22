const userStory = {
  id: 'US-57',
  implemented: true,
  role: 'Staff',
  title: 'Manage companies',
  story:
    'As a staff member, I can track the companies I do business with, ' +
    'so that I can invoice them and see who works there.',
  behaviours: [
    'The Companies page lists every company in a sortable, paginated ' +
      'table with its name, invoice email, website and contacts.',
    'I can create a company with a name, legal name, address, business ' +
      'number, invoice email and website.',
    'A company page shows its details and the table of contacts linked ' +
      'to it.',
    'A company page shows its activity — the invoices raised for it.',
    'I can edit a company, and the change is reflected.',
    'Deleting a company asks for confirmation first.'
  ]
};

export default userStory;
