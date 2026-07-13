const userStory = {
  id: 'US-43',
  implemented: true,
  role: 'Staff',
  title: 'Track events & import attendees',
  story:
    'As a staff member, I can track events and import attendee lists (e.g. ' +
    'from Luma CSV), so that event history lives in the CRM.',
  behaviours: [
    "Re-importing never regresses someone's attendance status timestamps.",
    '"Returning attendee" counts only people who checked in at an earlier ' +
      'event.',
    'CSV import handles odd formatting, amounts like "$1,234.56", and a ' +
      'guest with no email (contact from name).'
  ]
};

export default userStory;
