const userStory = {
  id: 'US-49',
  role: 'System',
  title: 'Keep assistant (MCP) tools safe',
  story:
    "As the business, I need the AI assistant's destructive tools to " +
    'require confirmation and treat stored text as untrusted, so that ' +
    "automation can't quietly delete or be tricked.",
  behaviours: [
    'Delete, merge and money-changing tools require an explicit ' +
      'confirmation.',
    'A global kill-switch can refuse destructive tools even with ' +
      'confirmation.',
    'Stored CRM text is treated as data, never as instructions to the ' +
      'assistant.',
    'Bulk "mark invoices sent" requires confirmation like the other ' +
      'money-changing tools.'
  ]
};

export default userStory;
