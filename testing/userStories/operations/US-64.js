const userStory = {
  id: 'US-64',
  implemented: true,
  role: 'System',
  title: 'Report Luma registrations to LinkedIn ads',
  story:
    'As the business, I need registrations for my advertised events ' +
    'reported to LinkedIn as conversions, so that each ad campaign gets ' +
    'credit for the registrations it produced — not just the clicks.',
  behaviours: [
    'An event Settings page links and unlinks its conversion rule.',
    'guest.registered on a linked event reports one conversion, keyed ' +
      'on the SHA-256 hashed email — never the raw address.',
    'An event with no linked rule reports nothing.',
    'A conversion is worth what that registrant actually paid — always ' +
      'derived, never a stored or overridable amount.',
    'The event page shows whether it reports to LinkedIn, and its window.',
    'The settings page sets the attribution window, defaulting to 7 days.',
    'That window is read from and written to LinkedIn, never stored here.',
    'guest.updated and ticket.registered never report, so approval and ' +
      'check-in cannot double-count one person.',
    'A retried delivery reuses the dedup id, so LinkedIn counts one.',
    'The conversion is stamped when they registered, not when we ran.',
    'A LinkedIn failure is logged and swallowed; Luma still gets 2xx.',
    'Without an access token the report is skipped silently.'
  ]
};

export default userStory;
