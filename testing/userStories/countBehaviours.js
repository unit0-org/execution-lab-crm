import { domains, userStories } from './index.js';

function isGuarantee(story) {
  return story.guarantee;
}

function addBehaviours(total, story) {
  return total + story.behaviours.length;
}

export const storyTotals = {
  domains: domains.length,
  stories: userStories.length,
  guarantees: userStories.filter(isGuarantee).length,
  behaviours: userStories.reduce(addBehaviours, 0)
};
