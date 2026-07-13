const userStory = {
  id: 'US-28',
  role: 'Admin',
  title: 'Invite and revoke portal members',
  story:
    'As an admin, I can invite people to the portal and revoke them, and ' +
    'grant tools, so that I control who gets access.',
  behaviours: [
    'Inviting requires the contact to have an email.',
    'Re-inviting a revoked member sets them back to invited.',
    "Non-admins can't invite, revoke or toggle tools; an unknown tool key " +
      'is rejected.'
  ]
};

export default userStory;
