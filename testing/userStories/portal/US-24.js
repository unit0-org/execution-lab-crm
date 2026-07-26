const userStory = {
  id: 'US-24',
  implemented: true,
  role: 'Member',
  title: 'Sign in to the portal',
  story:
    'As a member, I can sign in with Google, with my email and password, ' +
    'or with an emailed magic link, so that I reach my portal whichever ' +
    'way suits me.',
  behaviours: [
    'The sign-in page offers all three ways in: continue with Google, ' +
      'email and password, and an emailed magic link.',
    'Signing in with Google identifies me by any of the email addresses ' +
      'on my contact, not only one of them.',
    'A wrong password shows a clear message on the sign-in page, and never ' +
      'reveals whether that email has an account.',
    'Signing in with Google on the portal never captures a Google refresh ' +
      'token — that stays staff-only.',
    'Anyone can attempt any of the three, but without membership every ' +
      'page bounces back to sign-in.',
    'A failed sign-in returns to the portal sign-in page, not the staff ' +
      'login.'
  ]
};

export default userStory;
