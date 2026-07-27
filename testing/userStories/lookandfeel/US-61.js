const userStory = {
  id: 'US-61',
  implemented: true,
  role: 'Staff',
  title: 'Find my way around from the sidebar',
  story:
    'As a staff member, I want the sidebar to group the app by area and ' +
    'stay usable when I collapse it, so I can reach any screen in one or ' +
    'two clicks without giving up my screen width.',
  behaviours: [
    'Links are grouped by area (CRM, Events, Programs, Sales); tapping a ' +
      'group opens it, and it opens itself when I am on one of its pages.',
    'Collapsing the sidebar leaves an icon rail, and the choice survives ' +
      'a reload with no flash of the wide sidebar.',
    'In the rail a group is a single icon: clicking it opens that group\'s ' +
      'links in a panel beside it, and choosing one closes the panel.',
    'A count badge is never hidden by folding the nav — a closed group ' +
      'and a rail icon both carry their links\' counts rolled up.',
    'On mobile the sidebar is a drawer with the links themselves, not a ' +
      'rail: the collapse state is ignored there.'
  ]
};

export default userStory;
