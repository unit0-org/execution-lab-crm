const userStory = {
  id: 'US-56',
  implemented: true,
  role: 'Staff',
  title: "Keep a contact's tasks in sync with Google Tasks",
  story:
    'As a staff member, I can manage a contact\'s follow-up tasks in the ' +
    'CRM and have them stay in lock-step with my Google Tasks, so that I ' +
    'have one to-do list wherever I work.',
  behaviours: [
    'Creating a task in the CRM immediately creates it in the primary ' +
      "account's default Google Tasks list, storing the link.",
    'Completing, editing or deleting a task in the CRM is pushed to its ' +
      'Google task in the same action; a Google hiccup never fails the write.',
    'A task edited, completed or deleted in the Google app is reflected on ' +
      'its CRM row within one poll cycle (~15 min).',
    'Only CRM-originated tasks are reconciled; tasks created directly in ' +
      'Google are ignored, never orphan-imported.',
    "Conflicts resolve last-write-wins by the task's updated time; " +
      're-running the poll never duplicates or double-applies.',
    'A task deleted in Google removes its CRM row, and a CRM delete removes ' +
      'its Google task — mirrored both ways.'
  ]
};

export default userStory;
