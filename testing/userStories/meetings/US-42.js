const userStory = {
  id: 'US-42',
  role: 'System',
  title: 'Import meeting transcripts on a schedule',
  story:
    'As the system, I import transcript files from a Drive folder each day, ' +
    'so that meetings enrich themselves without manual work.',
  behaviours: [
    'A batch applies as one all-or-nothing operation; files move to "done" ' +
      'only after it commits.',
    'One malformed file rolls back the whole batch and moves nothing; the ' +
      'log names the file.',
    'A partial move on a later run is re-imported harmlessly and converges.'
  ]
};

export default userStory;
