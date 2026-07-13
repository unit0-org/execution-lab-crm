const userStory = {
  id: 'US-27',
  role: 'Member',
  title: "Use the tools I've been granted",
  story:
    "As a member, I can use the portal tools I've been given access to, so " +
    'that I get the extras included with my membership.',
  behaviours: [
    "Each tool page re-checks my grant; without it I'm sent back to the " +
      'tools list.',
    'An owner can open any tool.',
    'A tool that no longer exists is silently dropped from my access.'
  ]
};

export default userStory;
