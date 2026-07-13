const userStory = {
  id: 'US-48',
  role: 'System',
  title: 'Run daily scheduled jobs',
  story:
    'As the system, I run the daily maintenance jobs in order, so that ' +
    'syncs, waitlist and follow-ups happen without anyone pressing a ' +
    'button.',
  behaviours: [
    'The job runner requires its secret; an unauthorized call runs nothing.',
    'Jobs run in order and one failing job never stops the rest.',
    'Every run is recorded, whether it succeeded or failed.'
  ]
};

export default userStory;
