const userStory = {
  id: 'US-8',
  implemented: 'partial',
  gaps: [
    "A person can't be related to themselves, and duplicate " +
      'relationships are prevented.',
    'A directed relationship reads correctly from both sides - ' +
      'it inverts (e.g. "reports to" / "manages").'
  ],
  role: 'Staff',
  title: 'Link contacts with relationships',
  story:
    'As a staff member, I can connect two contacts with a relationship, so ' +
    'that I can see how people relate (reports to, spouse, …).',
  behaviours: [
    'A relationship needs a target person and either a preset type or a ' +
      'custom label; a type wins over a label.',
    "A person's relationships list shows links from either end.",
    "A person can't be related to themselves, and duplicate relationships " +
      'are prevented.',
    'A directed relationship reads correctly from both sides — it inverts ' +
      '(e.g. "reports to" ↔ "manages").',
    'Removing a relationship asks me to confirm first — one stray click ' +
      'never unlinks two people.'
  ]
};

export default userStory;
