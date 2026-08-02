const userStory = {
  id: 'US-66',
  implemented: true,
  role: 'Staff',
  title: 'Find contacts by how they took part in events',
  story:
    'As a staff member, I can filter contacts by attendance status and ' +
    'by event, so that I can reach exactly the people who turned up, ' +
    'registered, or told us they were not coming.',
  behaviours: [
    'The statuses offered are Attended, Not going, Registered and ' +
      'Waitlist — never Invited, which the CRM no longer keeps.',
    'Choosing several statuses, or several events, means any of them.',
    'Leaving either dimension empty stops it narrowing anything.',
    'The choice lives in the URL, so it survives a refresh and coming ' +
      'back from a contact.',
    'It composes with the lead filter and the label filter.',
    'An unknown status in a hand-edited URL is dropped rather than ' +
      'widening the query.',
    'Someone who took part many times is listed once.'
  ]
};

export default userStory;
