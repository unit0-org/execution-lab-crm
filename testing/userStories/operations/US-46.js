const userStory = {
  id: 'US-46',
  implemented: true,
  role: 'Staff',
  title: 'See how events turn into clients',
  story:
    'As a staff member, I can open a dashboard that follows the people ' +
    'who attend our events through to becoming clients, so that I know ' +
    'which events are worth running again.',
  behaviours: [
    'The headline counts events hosted, check-ins, unique participants, ' +
      'and the share of attendees who took a meeting or became a client.',
    'An event dated in the future is never counted, so something upcoming ' +
      'cannot drag a conversion rate down.',
    'The funnel runs attended to nurturing to clients, each arrow ' +
      'carrying the share that made it to the next stage.',
    '"Nurturing" is any touch — a note, meeting, email, purchase or ' +
      'another event — dated strictly after that person\'s first check-in.',
    'A client is the customer rule ($100+ purchase or paid registration), ' +
      'first reached after they attended.',
    'Events are ranked by the share of their attendees who became ' +
      'clients, and the table says so when it lists only the top few.',
    'Period and type filters live in the URL, so a filtered dashboard is ' +
      'a link I can send; it opens on the last 3 months.',
    'The events count links to the events page carrying the same filter, ' +
      'so the number I clicked and the rows I land on agree.'
  ]
};

export default userStory;
