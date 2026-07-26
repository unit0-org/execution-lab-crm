const userStory = {
  id: 'US-60',
  implemented: true,
  role: 'Admin',
  title: "Set a member's portal password",
  story:
    "As an admin, I can set a portal member's password from the CRM, so " +
    'that I can hand someone their access directly instead of waiting for ' +
    'them to click an emailed link.',
  behaviours: [
    'The Portal Members page offers "Set password" on any member\'s row, ' +
      'opening a modal.',
    'Setting a password on a member who has never signed in creates their ' +
      'login and links it to them, so they become active without ever ' +
      'receiving an email.',
    'Setting a password on a member who has signed in before replaces the ' +
      'old one and leaves their membership and tool grants untouched.',
    'Setting a password sends the member nothing — I pass it on myself.',
    'A password shorter than the minimum length is refused with a clear ' +
      'message, and nothing is changed.',
    "A revoked member's password can't be set — they have to be restored " +
      'first.',
    'Only admins can set a password; a non-admin request is refused.',
    'An existing password is never shown back to me — it can only be ' +
      'replaced.'
  ]
};

export default userStory;
