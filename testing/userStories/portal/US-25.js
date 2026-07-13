const userStory = {
  id: 'US-25',
  role: 'Member',
  title: 'Access resources for my cohorts',
  story:
    'As a member, I can open the materials for the cohorts I’m in, so that ' +
    'I get what I paid for.',
  behaviours: [
    'A member sees resources for cohorts where they hold a confirmed seat ' +
      '(pending or paid); an owner sees all.',
    'Recordings play as embedded video; other links open normally.',
    'If a hold lapses and the seat is lost, resource access is lost too.'
  ]
};

export default userStory;
