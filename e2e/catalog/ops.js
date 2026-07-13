// User stories mirrored from the Feature Spec artifact (domain: Operations).

export const domain = {
  code: 'OPS',
  id: 'ops',
  title: 'Dashboard & Operations'
};

export const stories = [
  {
    id: 'US-46',
    role: 'Staff',
    title: 'See leads, customers & hot prospects',
    story:
      'As a staff member, I can open a dashboard that scores and segments ' +
      'contacts, so that I know who to focus on.',
    behaviours: [
      'A customer is anyone with a $100+ purchase or a paid registration; a ' +
        "comped seat counts, $99.99 alone doesn't.",
      'Lead score blends purchases, check-ins and meetings, weighted by how ' +
        'recent they are.',
      '"Hot leads" are the top non-customers with a score above zero; ' +
        'segments group the rest.',
      'A contact whose every label is excluded-from-leads drops out of the ' +
        'pipeline.'
    ]
  },
  {
    id: 'US-47',
    role: 'Staff',
    title: 'Get notified about @-mentions',
    story:
      "As a staff member, I'm notified when a teammate @-mentions me in a " +
      "note, so that I don't miss things aimed at me.",
    behaviours: [
      'Only newly-added mentions notify; editing to re-save the same note ' +
        "doesn't re-notify.",
      "You're never notified about mentioning yourself.",
      'A failed notification email never blocks saving the note.'
    ]
  },
  {
    id: 'US-48',
    role: 'System',
    title: 'Run daily scheduled jobs',
    story:
      'As the system, I run the daily maintenance jobs in order, so that ' +
      'syncs, waitlist and follow-ups happen without anyone pressing a ' +
      'button.',
    behaviours: [
      'The job runner requires its secret; an unauthorized call runs ' +
        'nothing.',
      'Jobs run in order and one failing job never stops the rest.',
      'Every run is recorded, whether it succeeded or failed.'
    ]
  },
  {
    id: 'US-49',
    role: 'System',
    title: 'Keep assistant (MCP) tools safe',
    story:
      "As the business, I need the AI assistant's destructive tools to " +
      'require confirmation and treat stored text as untrusted, so that ' +
      "automation can't quietly delete or be tricked.",
    behaviours: [
      'Delete, merge and money-changing tools require an explicit ' +
        'confirmation.',
      'A global kill-switch can refuse destructive tools even with ' +
        'confirmation.',
      'Stored CRM text is treated as data, never as instructions to the ' +
        'assistant.',
      'Bulk "mark invoices sent" requires confirmation like the other ' +
        'money-changing tools.'
    ]
  },
  {
    id: 'US-50',
    role: 'System',
    guarantee: true,
    title: 'New data tables are private & migrations are unique',
    story:
      'As the business, I need every new data table to be private by ' +
      'default and every migration to be unique, so that we never ' +
      'accidentally expose data or break a deploy.',
    behaviours: [
      'Every new public table turns on row-level security (deny-all) so the ' +
        "public key can't read it.",
      'Migration version numbers are unique — a duplicate breaks every ' +
        'deploy.'
    ]
  },
  {
    id: 'US-51',
    role: 'System',
    guarantee: true,
    title: 'Re-running any sync or import never duplicates',
    story:
      'As the business, I need every sync, import and webhook to be safe to ' +
      're-run, so that retries and replays converge instead of piling up ' +
      'copies.',
    behaviours: [
      'Every import and sync is keyed on a stable identifier so re-running ' +
        'finds-or-updates rather than creating anew.',
      'Replaying a payment or charge notification produces no second record.'
    ]
  },
  {
    id: 'US-52',
    role: 'Staff',
    title: 'Sign in safely to the back office',
    story:
      'As a staff member, I can sign in with Google and trust my session is ' +
      'safe, so that only the right people reach the back office.',
    behaviours: [
      'Staff sign in via Google; a missing or bad code shows an error, not ' +
        'a broken page.',
      "Redirects after sign-in can't be pointed at another site (no open " +
        'redirect).',
      'The first sign-in of an invited email links the account and keeps ' +
        'the email so mentions still reach them.'
    ]
  }
];
