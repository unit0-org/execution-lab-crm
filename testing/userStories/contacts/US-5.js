const userStory = {
  id: 'US-5',
  role: 'Staff',
  title: "Manage a contact's phones",
  story:
    'As a staff member, I can add and remove phone numbers, so that I have ' +
    'another way to reach a contact.',
  behaviours: [
    'Numbers are stored exactly as entered (no reformatting), so formatting ' +
      'differences count as different numbers.',
    'The same number can sit on two different people.',
    "Adding a number to a contact that doesn't exist does nothing.",
    'Adding the same number twice to one person is handled gracefully.'
  ]
};

export default userStory;
