const userStory = {
  id: 'US-3',
  role: 'Staff',
  title: 'Find-or-add a person by email then phone',
  story:
    'As a staff member (or an import), I can look up a person and create ' +
    'them if missing, so that I never make an accidental duplicate.',
  behaviours: [
    'Matches an existing person by email first, then by phone, else creates ' +
      'a new one.',
    'An email already owned by someone else is never moved to another ' +
      'contact.',
    'When matched by email, an incoming different name is ignored — the ' +
      'match wins.'
  ]
};

export default userStory;
