// User stories mirrored from the Feature Spec artifact (domain: Meetings).

export const domain = {
  code: 'MEE',
  id: 'meetings',
  title: 'Meetings & Google'
};

export const stories = [
  {
    id: 'US-37',
    role: 'Staff',
    title: 'Create and manage meetings',
    story:
      'As a staff member, I can create meetings and manage who attended, so ' +
      'that conversations are on the record.',
    behaviours: [
      'Deleting a meeting is recoverable (a soft delete).',
      'Adding the same person twice results in one participant; adding by a ' +
        'new email creates a contact.',
      "A deleted synced meeting doesn't collide with its calendar event on " +
        'the next sync.'
    ]
  },
  {
    id: 'US-38',
    role: 'System',
    title: 'Sync meetings from Google Calendar',
    story:
      'As the system, I pull meetings from a connected Google Calendar, so ' +
      'that the CRM reflects real meetings automatically.',
    behaviours: [
      'Sync is throttled to once an hour and looks back 90 days.',
      'Events with only yourself (no other attendees) are skipped.',
      'An untitled event falls back to "Untitled meeting".'
    ]
  },
  {
    id: 'US-39',
    role: 'System',
    title: 'Match transcripts to the right meeting',
    story:
      'As the system, I attach a transcript to its calendar meeting, so ' +
      "that notes and calendar entries don't split into duplicates.",
    behaviours: [
      'Same title and same minute is adopted automatically; same title, ' +
        'different minute raises a suggestion.',
      'A meeting within 2 hours sharing a person is adopted if within 15 ' +
        'minutes, otherwise suggested.',
      'A transcript never silently attaches to the wrong meeting — an ' +
        'uncertain match raises a suggestion instead.'
    ]
  },
  {
    id: 'US-40',
    role: 'Staff',
    guarantee: true,
    title: 'Merging meetings never loses data',
    story:
      'As a staff member, when I merge duplicate meetings, I need all their ' +
      'content to move to the survivor, so that cleanup is safe.',
    behaviours: [
      'Participants, notes, attachments and transcripts all move to the ' +
        'survivor.',
      "The merge can't run if one of the meetings was already deleted.",
      "Choosing the survivor among the losers can't delete the survivor."
    ]
  },
  {
    id: 'US-41',
    role: 'Staff',
    title: 'Enrich contacts from a transcript',
    story:
      'As a staff member, I can apply a meeting transcript to enrich ' +
      'contacts and notes, so that insights from calls land in the CRM.',
    behaviours: [
      'A transcript applies all-or-nothing — a mid-way failure writes ' +
        'nothing.',
      "Facts are dated to the meeting, not to import time; re-runs don't " +
        'move that date.',
      'Contacts are matched by email, then full name, else created; ' +
        "re-running doesn't duplicate.",
      'A dry-run previews everything and rolls back.'
    ]
  },
  {
    id: 'US-42',
    role: 'System',
    title: 'Import meeting transcripts on a schedule',
    story:
      'As the system, I import transcript files from a Drive folder each ' +
      'day, so that meetings enrich themselves without manual work.',
    behaviours: [
      'A batch applies as one all-or-nothing operation; files move to ' +
        '"done" only after it commits.',
      'One malformed file rolls back the whole batch and moves nothing; the ' +
        'log names the file.',
      'A partial move on a later run is re-imported harmlessly and ' +
        'converges.'
    ]
  },
  {
    id: 'US-43',
    role: 'Staff',
    title: 'Track events & import attendees',
    story:
      'As a staff member, I can track events and import attendee lists ' +
      '(e.g. from Luma CSV), so that event history lives in the CRM.',
    behaviours: [
      "Re-importing never regresses someone's attendance status " +
        'timestamps.',
      '"Returning attendee" counts only people who checked in at an earlier ' +
        'event.',
      'CSV import handles odd formatting, amounts like "$1,234.56", and a ' +
        'guest with no email (contact from name).'
    ]
  },
  {
    id: 'US-44',
    role: 'Staff',
    title: 'Connect Google accounts',
    story:
      'As a staff member, I can connect Google accounts for calendar and ' +
      'contacts, so that sync has something to pull from.',
    behaviours: [
      'The first connected account becomes primary; exactly one is primary ' +
        'at a time.',
      'Reconnecting refreshes the token without creating a duplicate.',
      'Disconnecting keeps the contacts and data already pulled in.'
    ]
  },
  {
    id: 'US-45',
    role: 'System',
    title: 'Sync contacts with Google both ways',
    story:
      'As the system, I sync contacts to and from Google, so that both stay ' +
      'in step without clobbering each other.',
    behaviours: [
      'Each run pushes at most a set number of writes and resumes where it ' +
        'left off next run.',
      'Only the primary account pushes outward; conflicting values are ' +
        'recorded, not overwritten.',
      'A person deleted in Google keeps their CRM contact (just unlinked).'
    ]
  }
];
