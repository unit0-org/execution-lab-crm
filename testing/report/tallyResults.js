function countStatus(stories, status) {
  return stories.filter((story) => story.status === status).length;
}

function total(stories, key) {
  return stories.reduce((sum, story) => sum + story[key], 0);
}

export function tallyResults(results) {
  const stories = results.flatMap((domain) => domain.stories);

  return {
    counts: {
      pass: countStatus(stories, 'pass'),
      fail: countStatus(stories, 'fail'),
      partial: countStatus(stories, 'partial'),
      notImplemented: countStatus(stories, 'not-implemented')
    },
    storyCount: stories.length,
    behavioursPassed: total(stories, 'passed'),
    behavioursTotal: total(stories, 'total')
  };
}
