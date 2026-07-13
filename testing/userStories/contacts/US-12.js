const userStory = {
  id: 'US-12',
  implemented: true,
  role: 'Staff',
  title: 'Track birthday, LinkedIn and photo',
  story:
    'As a staff member, I can record a birthday, LinkedIn and see a photo, ' +
    "so that a contact's profile feels complete.",
  behaviours: [
    'A birthday can be recorded without a year.',
    'Auto-filling LinkedIn never overwrites a value that’s already there.',
    'The photo comes from an external source and falls back to initials ' +
      'when missing.',
    "A birthday's day and month are within a valid calendar range."
  ]
};

export default userStory;
