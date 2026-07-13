const userStory = {
  id: 'US-9',
  role: 'Staff',
  guarantee: true,
  title: 'Merging duplicates never loses information',
  story:
    'As a staff member, when I merge duplicate contacts into one, I need ' +
    'every piece of their history to move to the survivor, so that cleaning ' +
    'up duplicates is safe and permanent.',
  behaviours: [
    'Every email, phone, note, fact, category, relationship, meeting, ' +
      'event, purchase, invoice, registration, waitlist entry, notification ' +
      'and portal access moves to the survivor.',
    'True duplicates (same email, same phone, same category) are collapsed, ' +
      'not doubled.',
    'A relationship between the two merged people collapses to a self-link ' +
      'and is removed.',
    'The merge refuses to run if any selected contact is missing, and ' +
      'leaves nothing half-done.',
    'Any new kind of contact-owned data is folded into the merge, so ' +
      'nothing is left behind.'
  ]
};

export default userStory;
