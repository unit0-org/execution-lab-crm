const userStory = {
  id: 'US-52',
  role: 'Staff',
  title: 'Sign in safely to the back office',
  story:
    'As a staff member, I can sign in with Google and trust my session is ' +
    'safe, so that only the right people reach the back office.',
  behaviours: [
    'Staff sign in via Google; a missing or bad code shows an error, not a ' +
      'broken page.',
    "Redirects after sign-in can't be pointed at another site (no open " +
      'redirect).',
    'The first sign-in of an invited email links the account and keeps the ' +
      'email so mentions still reach them.'
  ]
};

export default userStory;
