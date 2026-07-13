// Joins Playwright's JSON results to the catalog and derives a status per story.
// A behaviour = one test whose title starts with the story id. A story is:
//   not-implemented  no test references its id
//   fail             at least one of its tests failed
//   partial          some behaviours pass, none fail, but not all are covered
//   pass             every behaviour has a passing test and none fail

import { domains, stories } from '../catalog/index.js';

const ID_RE = /^(US-\d+)\b/;

// Walk Playwright's nested {suites:[{suites,specs}]} tree and yield every spec.
function* eachSpec(node) {
  for (const spec of node.specs || []) yield spec;

  for (const child of node.suites || []) yield* eachSpec(child);
}

function specOutcome(spec) {
  const tests = spec.tests || [];
  const statuses = tests.map((test) => test.status);

  if (statuses.length && statuses.every((status) => status === 'skipped')) {
    return 'skipped';
  }

  return spec.ok ? 'passed' : 'failed';
}

export function tallyByStory(report) {
  const byStory = new Map(stories.map((story) => [story.id, []]));

  for (const spec of eachSpec(report || {})) {
    const match = ID_RE.exec(spec.title || '');

    if (!match) continue;

    const bucket = byStory.get(match[1]);

    if (bucket) bucket.push({ title: spec.title, outcome: specOutcome(spec) });
  }

  return byStory;
}

function statusOf(story, specs) {
  const passed = specs.filter((spec) => spec.outcome === 'passed').length;
  const failed = specs.filter((spec) => spec.outcome === 'failed').length;
  const total = story.behaviours.length;

  if (specs.length === 0) return { status: 'not-implemented', passed, failed, total };

  if (failed > 0) return { status: 'fail', passed, failed, total };

  if (passed >= total) return { status: 'pass', passed, failed, total };

  return { status: 'partial', passed, failed, total };
}

export function summarize(report) {
  const byStory = tallyByStory(report);

  const results = domains.map((domain) => ({
    ...domain,
    stories: domain.stories.map((story) => {
      const specs = byStory.get(story.id) || [];

      return { ...story, specs, ...statusOf(story, specs) };
    })
  }));

  const flat = results.flatMap((domain) => domain.stories);

  const counts = {
    pass: flat.filter((story) => story.status === 'pass').length,
    fail: flat.filter((story) => story.status === 'fail').length,
    partial: flat.filter((story) => story.status === 'partial').length,
    notImplemented: flat.filter((story) => story.status === 'not-implemented').length
  };

  const behavioursPassed = flat.reduce((sum, story) => sum + story.passed, 0);
  const behavioursTotal = flat.reduce((sum, story) => sum + story.total, 0);

  return { results, counts, behavioursPassed, behavioursTotal };
}
