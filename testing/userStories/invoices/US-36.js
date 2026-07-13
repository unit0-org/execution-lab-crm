const userStory = {
  id: 'US-36',
  role: 'Admin',
  title: 'Manage company & invoice settings',
  story:
    'As an admin, I can set company details, invoice defaults and connected ' +
    'accounts, so that billing matches our brand and process.',
  behaviours: [
    'Only admins can change settings; auto-create defaults on and the ' +
      'number prefix defaults to "INV-".',
    'Exactly one Google account is primary at a time.',
    'Email templates are shared globally and seeded on first use.'
  ]
};

export default userStory;
