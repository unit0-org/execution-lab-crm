const userStory = {
  id: 'US-26',
  role: 'Member',
  title: 'View and download my invoices',
  story:
    'As a member, I can see and download my invoices, so that I have my ' +
    'billing records.',
  behaviours: [
    'Only approved, sent or paid invoices appear — never drafts or voids.',
    'Each invoice offers a PDF download.',
    "Only the invoice's owner (or staff) can open its PDF — a guessed link " +
      'is refused.'
  ]
};

export default userStory;
