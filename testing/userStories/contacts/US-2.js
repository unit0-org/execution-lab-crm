const userStory = {
  id: 'US-2',
  role: 'Staff',
  title: "Update a contact's details",
  story:
    "As a staff member, I can edit a contact's fields, so that their record " +
    'stays accurate.',
  behaviours: [
    'Editing one field changes only that field.',
    'Editing a contact that was deleted quietly does nothing — no error, no ' +
      'crash.',
    'Editing is limited to the fields that are meant to be editable.'
  ]
};

export default userStory;
