const userStory = {
  id: 'US-53',
  implemented: true,
  role: 'Admin',
  title: 'Automate actions with when-this-then-that rules',
  story:
    'As an admin, I can build my own "when this happens, do that" rules, ' +
    'so that routine follow-ups happen without me remembering them.',
  behaviours: [
    'Every trigger in the catalog can be paired with every action.',
    'A category-added trigger can be narrowed to one category.',
    'An action resolves the contact and their email before it runs.',
    'A rule can be switched active or inactive, and deleting one asks ' +
      'first.',
    'A failing action is logged as a failed run and never breaks the ' +
      'trigger that fired it.',
    'The birthday trigger fires from the daily job, in the business ' +
      'timezone.',
    'Only an admin can see, create, toggle or delete automations.'
  ]
};

export default userStory;
