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
    'CSV import handles odd formatting and amounts like "$1,234.56".',
    'A guest who was only ever invited never enters the CRM at all — an ' +
      'invite says what we did, not what they did.',
    'A guest carrying no email and no phone is refused, because nothing ' +
      'could recognise them on the next run.',
    'Every intake path enforces both — the daily sync, the live webhook ' +
      'and the CSV import.',
    'A name we did not have is filled in by a later sync; a name already ' +
      'on file is never overwritten.',
    'The events list filters by period and by type.',
    'I can select many events and delete them together after one confirm.'
  ]
};

export default userStory;
