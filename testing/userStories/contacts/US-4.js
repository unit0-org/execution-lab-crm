const userStory = {
  id: 'US-4',
  role: 'Staff',
  title: "Manage a contact's emails",
  story:
    'As a staff member, I can add, edit and remove a contact’s email ' +
    'addresses, so that I can reach them.',
  behaviours: [
    'Each email belongs to exactly one person across the whole system.',
    'Adding or editing to an email already in use shows a friendly error, ' +
      'not a crash.',
    'Case- or spacing-only differences are treated as the same email.',
    "Removing the person's only email is allowed."
  ]
};

export default userStory;
