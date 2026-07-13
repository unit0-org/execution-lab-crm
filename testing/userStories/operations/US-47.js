const userStory = {
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
};

export default userStory;
