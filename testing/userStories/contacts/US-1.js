const userStory = {
  id: 'US-1',
  role: 'Staff',
  title: 'Create a contact',
  story:
    'As a staff member, I can create a contact with a name, emails and ' +
    'phones, so that I have one record to track a person.',
  behaviours: [
    'Creating a contact with no email still saves the person.',
    "Adding an email that's already in use shows a clear message, and the " +
      'contact is still created.',
    'Emails are stored lower-cased and trimmed, and duplicates are ' +
      'collapsed.',
    'The full name reads correctly with only a first name, only a last ' +
      'name, or neither.',
    "Quick-create returns the new person's id and name so the caller can " +
      'continue.'
  ]
};

export default userStory;
