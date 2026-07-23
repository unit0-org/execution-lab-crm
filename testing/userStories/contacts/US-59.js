const userStory = {
  id: 'US-59',
  implemented: true,
  role: 'Staff',
  title: 'Find, fix & merge duplicate contacts',
  story:
    'As a staff member, I want the CRM to surface likely-duplicate ' +
    'contacts and offer safe formatting fixes, so I can clean up my ' +
    'contacts in one place instead of hunting manually.',
  behaviours: [
    'The Merge & Fix surface lists suggested duplicate groups, each ' +
      'labelled with its match reason (same name or same phone).',
    'Merging a group opens the review modal and, on confirm, folds it ' +
      'into one contact via the existing contact-merge operation.',
    'Dismissing a suggested pair removes it and it does not reappear on ' +
      'a later visit.',
    'A group is suppressed once dismissals reduce it below two ' +
      'mergeable contacts.',
    'The surface lists safe normalization fixes (whitespace in names ' +
      'and phones) only where the stored value differs from normalized.',
    'Selecting several fixes and applying runs them in one transaction ' +
      '— all succeed or none — and the rows update in place.',
    'Applied, merged and dismissed items disappear from the surface.',
    'No auto-merge: every merge needs the review modal + confirm, and a ' +
      'dismissal never deletes a contact.'
  ]
};

export default userStory;
