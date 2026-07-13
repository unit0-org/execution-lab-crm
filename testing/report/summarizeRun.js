import { domains } from '../userStories/index.js';
import { readSpecs } from './readSpecs.js';
import { statusOfStory } from './statusOfStory.js';
import { specsForStory } from './specsForStory.js';
import { tallyResults } from './tallyResults.js';

function withResults(story, specs) {
  const own = specsForStory(story, specs);

  return { ...story, specs: own, ...statusOfStory(story, own) };
}

// Joins a Playwright run to the catalog, so every story is accounted for —
// including the ones no test covers yet.
export function summarizeRun(report) {
  const specs = readSpecs(report);
  const results = domains.map((domain) => ({
    ...domain,
    stories: domain.stories.map((story) => withResults(story, specs))
  }));

  return { results, run: report?.stats || null, ...tallyResults(results) };
}
