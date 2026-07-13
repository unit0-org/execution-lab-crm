const userStory = {
  id: 'US-24',
  role: 'Member',
  title: 'Sign in with a magic link',
  story:
    'As a member, I can sign in with an email magic link, so that I reach ' +
    'my portal without a password.',
  behaviours: [
    'Sign-in is email-only — no Google or password.',
    'Anyone can request a link, but without membership every page bounces ' +
      'back to sign-in.',
    'A failed sign-in returns to the portal sign-in page, not the staff ' +
      'login.'
  ]
};

export default userStory;
