const userStory = {
  id: 'US-23',
  implemented: true,
  role: 'System',
  guarantee: true,
  title: 'Staff and member areas each guard themselves',
  story:
    'As the business, I need the back office and the member area to each ' +
    'require their own membership, so that one kind of session can never ' +
    'wander into the other.',
  behaviours: [
    "A staff session can't reach any member page, and a member session " +
      "can't reach any back-office page.",
    'A revoked member is blocked on every member sub-page, not just the ' +
      'landing one.',
    'The gate holds whether the portal runs on its own subdomain or under a ' +
      'path.'
  ]
};

export default userStory;
