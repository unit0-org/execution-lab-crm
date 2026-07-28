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
    'Safe whitespace fixes list only where stored differs from normalized.',
    'Applying fixes runs them in one transaction — all or none.',
    'Groups and fixes share one selection; one "Apply selected" runs it.',
    'Applying opens one review naming who survives each merge; one ' +
      'confirm runs them all, and cancelling runs nothing.',
    'A group whose names disagree is unbatchable; it merges from its own ' +
      'review, so I choose who survives.',
    'A running batch ticks each line off as it lands, with a count.',
    'A failed step stops the run, says why, and keeps what applied.',
    'Applied and dismissed items go, plus groups left pointing at them.',
    'No auto-merge: batched or not, a merge needs the review + confirm.',
    'The sidebar Merge & Fix link badges waiting items; none at zero.'
  ]
};

export default userStory;
