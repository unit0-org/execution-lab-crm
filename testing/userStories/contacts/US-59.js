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
    'The surface lists duplicate groups, labelled by match reason.',
    'Merging a group opens the review modal and folds it into one.',
    'A dismissed pair goes for good, and never deletes a contact.',
    'A group is suppressed once dismissals leave it under two contacts.',
    'Safe whitespace fixes in names and phones list only where the ' +
      'stored value differs from normalized.',
    'Applying fixes runs them in one transaction — all or none.',
    'Groups and fixes share one selection; one "Apply selected" runs it.',
    'Applying opens one review naming who survives each merge; one ' +
      'confirm runs them all, and cancelling runs nothing.',
    'A group whose contacts disagree on name cannot be batched — it ' +
      'merges from its own review, so I choose who survives.',
    'Applied, merged and dismissed items go — including a group left ' +
      'pointing at a contact the batch folded away.',
    'No auto-merge: batched or not, a merge needs the review + confirm.',
    'The sidebar Merge & Fix link badges waiting items; none at zero.'
  ]
};

export default userStory;
