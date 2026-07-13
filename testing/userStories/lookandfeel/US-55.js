const userStory = {
  id: 'US-55',
  implemented: true,
  role: 'Staff',
  guarantee: true,
  title: 'Nothing is destroyed without asking me first',
  story:
    'As a staff member, I need every control that destroys something to ' +
    'ask me to confirm before it acts, so that a single mis-click can ' +
    "never quietly cost me data I can't get back.",
  behaviours: [
    'Every delete or remove control — anywhere in the product — opens a ' +
      'confirmation before it does anything.',
    'Confirming is a deliberate second act: the dialog names what is about ' +
      'to go, and cancelling leaves everything untouched.',
    'Every screen uses the one shared confirmation dialog — no screen ' +
      'rolls its own, and none skips it.',
    'The row-level removals confirm too: a contact\'s relationships, ' +
      'emails and phones, a meeting\'s notes and participants, and a ' +
      "tool's saved inputs.",
    'A contact merge only runs from the review modal — it never fires ' +
      'straight off the toolbar, because it deletes the contacts not kept.',
    'Dropping a not-yet-saved row from a form I am still filling in is not ' +
      'a destruction, and does not ask.',
    'Any new destructive control is wired through that same shared dialog, ' +
      'so this holds as the product grows.'
  ]
};

export default userStory;
