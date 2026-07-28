const userStory = {
  id: 'US-54',
  implemented: true,
  role: 'Staff',
  guarantee: true,
  title: 'Every form and modal puts its buttons in the same place',
  story:
    'As a staff member, I need every form and modal to place its buttons ' +
    'in the same spot, so that I never hunt for the button that finishes ' +
    'what I started.',
  behaviours: [
    "A form's or modal's buttons sit together in one row, aligned to the " +
      'right.',
    'The primary action (Save, Create, Delete) comes last — furthest ' +
      'right; Cancel sits to its left.',
    'Every form and modal in the product uses that one shared action row ' +
      '— no screen lays out its own buttons.',
    'A titled dialog gets its title from the shared titled modal, so the ' +
      'heading and the close button never collide.',
    'While the action it fires is still running, the primary button shows ' +
      'a spinner and cannot be pressed again — no dialog looks dead.',
    'On a narrow screen the buttons stay reachable and touch-friendly, ' +
      'without horizontal scrolling.'
  ]
};

export default userStory;
