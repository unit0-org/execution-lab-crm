// User stories mirrored from the Feature Spec artifact (domain: Contacts).
// The artifact stays the source of truth; this file is its machine-readable
// mirror so the report can list every story. Keep both in step.

export const domain = { code: 'CON', id: 'contacts', title: 'Contacts' };

export const stories = [
  {
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
      'Emails are stored lower-cased and trimmed, and duplicates are collapsed.',
      'The full name reads correctly with only a first name, only a last ' +
        'name, or neither.',
      "Quick-create returns the new person's id and name so the caller can " +
        'continue.'
    ]
  },
  {
    id: 'US-2',
    role: 'Staff',
    title: "Update a contact's details",
    story:
      "As a staff member, I can edit a contact's fields, so that their " +
      'record stays accurate.',
    behaviours: [
      'Editing one field changes only that field.',
      'Editing a contact that was deleted quietly does nothing — no error, ' +
        'no crash.',
      'Editing is limited to the fields that are meant to be editable.'
    ]
  },
  {
    id: 'US-3',
    role: 'Staff',
    title: 'Find-or-add a person by email then phone',
    story:
      'As a staff member (or an import), I can look up a person and create ' +
      'them if missing, so that I never make an accidental duplicate.',
    behaviours: [
      'Matches an existing person by email first, then by phone, else ' +
        'creates a new one.',
      'An email already owned by someone else is never moved to another ' +
        'contact.',
      'When matched by email, an incoming different name is ignored — the ' +
        'match wins.'
    ]
  },
  {
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
  },
  {
    id: 'US-5',
    role: 'Staff',
    title: "Manage a contact's phones",
    story:
      'As a staff member, I can add and remove phone numbers, so that I ' +
      'have another way to reach a contact.',
    behaviours: [
      'Numbers are stored exactly as entered (no reformatting), so ' +
        'formatting differences count as different numbers.',
      'The same number can sit on two different people.',
      "Adding a number to a contact that doesn't exist does nothing.",
      'Adding the same number twice to one person is handled gracefully.'
    ]
  },
  {
    id: 'US-6',
    role: 'Staff',
    title: 'Organize contacts with categories',
    story:
      'As a staff member, I can label contacts and filter by those labels, ' +
      'so that I can group people (VIP, Newsletter, …).',
    behaviours: [
      'A contact can hold many labels; label names are unique.',
      'Filtering by several labels requires a contact to have all of them; ' +
        'a "no labels" filter finds unlabelled people.',
      'Deleting a label removes it from everyone but keeps the people.',
      'Toggling a label’s "count toward leads" changes who appears in ' +
        'the leads pipeline.',
      'Adding a label to many contacts skips ones already labelled and ' +
        'ignores unknown ids.'
    ]
  },
  {
    id: 'US-7',
    role: 'Staff',
    title: 'Record facts and notes on a contact',
    story:
      'As a staff member, I can capture structured facts and free-text ' +
      'notes, so that context lives on the person.',
    behaviours: [
      'A fact must have a value; its label is optional.',
      'Re-adding a fact with a label that already exists does not overwrite ' +
        'the old value.',
      'A note must have a body and keeps its own date, separate from when ' +
        'it was created.',
      'Mentioning a teammate in a note notifies them; mentioning yourself ' +
        "records but doesn't notify."
    ]
  },
  {
    id: 'US-8',
    role: 'Staff',
    title: 'Link contacts with relationships',
    story:
      'As a staff member, I can connect two contacts with a relationship, ' +
      'so that I can see how people relate (reports to, spouse, …).',
    behaviours: [
      'A relationship needs a target person and either a preset type or a ' +
        'custom label; a type wins over a label.',
      "A person's relationships list shows links from either end.",
      "A person can't be related to themselves, and duplicate relationships " +
        'are prevented.',
      'A directed relationship reads correctly from both sides — it inverts ' +
        '(e.g. "reports to" ↔ "manages").'
    ]
  },
  {
    id: 'US-9',
    role: 'Staff',
    guarantee: true,
    title: 'Merging duplicates never loses information',
    story:
      'As a staff member, when I merge duplicate contacts into one, I need ' +
      'every piece of their history to move to the survivor, so that ' +
      'cleaning up duplicates is safe and permanent.',
    behaviours: [
      'Every email, phone, note, fact, category, relationship, meeting, ' +
        'event, purchase, invoice, registration, waitlist entry, ' +
        'notification and portal access moves to the survivor.',
      'True duplicates (same email, same phone, same category) are ' +
        'collapsed, not doubled.',
      'A relationship between the two merged people collapses to a ' +
        'self-link and is removed.',
      'The merge refuses to run if any selected contact is missing, and ' +
        'leaves nothing half-done.',
      'Any new kind of contact-owned data is folded into the merge, so ' +
        'nothing is left behind.'
    ]
  },
  {
    id: 'US-10',
    role: 'Staff',
    guarantee: true,
    title: "A contact's timeline shows every kind of activity",
    story:
      'As a staff member, I can see one reverse-chronological timeline per ' +
      'contact, so that I understand everything that has happened with them ' +
      'at a glance.',
    behaviours: [
      'Events, meetings, purchases and cohort registrations all appear, ' +
        'newest first.',
      'Only people who registered or checked in for an event show — mere ' +
        'invitees are excluded.',
      'A contact with no activity shows an empty state, not an error.',
      'Any new kind of per-contact record also appears in this timeline.'
    ]
  },
  {
    id: 'US-11',
    role: 'Staff',
    title: 'Bulk-delete and search contacts',
    story:
      'As a staff member, I can select many contacts to delete and search ' +
      'the list, so that I can manage large numbers of people.',
    behaviours: [
      'Bulk delete is recoverable (a soft delete) — unlike merge, which is ' +
        'permanent.',
      'Deleting an empty selection does nothing.',
      'Search matches on both name and email; a blank search behaves ' +
        'predictably.'
    ]
  },
  {
    id: 'US-12',
    role: 'Staff',
    title: 'Track birthday, LinkedIn and photo',
    story:
      'As a staff member, I can record a birthday, LinkedIn and see a ' +
      "photo, so that a contact's profile feels complete.",
    behaviours: [
      'A birthday can be recorded without a year.',
      'Auto-filling LinkedIn never overwrites a value that’s already ' +
        'there.',
      'The photo comes from an external source and falls back to initials ' +
        'when missing.',
      "A birthday's day and month are within a valid calendar range."
    ]
  }
];
