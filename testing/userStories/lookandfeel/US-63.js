const userStory = {
  id: 'US-63',
  implemented: true,
  role: 'Staff',
  guarantee: true,
  title: 'The interface moves to explain what just changed',
  story:
    'As a staff member, I need the interface to move when it changes, so ' +
    'that I can see where a dialog came from, what a section revealed, ' +
    'and that a control heard me — instead of guessing between frames.',
  behaviours: [
    'A dialog rises into place over a backdrop that fades in, so it reads ' +
      'as arriving rather than blinking into existence.',
    'A menu or popover drops out of the control that opened it, so its ' +
      'origin is obvious.',
    'Expanding a collapsible section reveals its body as the chevron ' +
      'turns; the page never just grows.',
    'A selection bar rises in when the selection starts, and holds its ' +
      'space when idle so the list below never jumps.',
    'Controls answer a press: buttons, checkboxes and radios give ' +
      'tactile feedback.',
    'Every duration and easing comes from the shared motion tokens.',
    'Movement lives inside the ui/ primitive, so every dialog, menu and ' +
      'section in the product moves the same way.',
    'Anyone whose system asks for reduced motion gets the end state at ' +
      'once — nothing animates, and nothing is lost by not animating.'
  ]
};

export default userStory;
