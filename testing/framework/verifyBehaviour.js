import { test } from './playwright.js';
import { findUserStory } from '../userStories/findUserStory.js';

function readBehaviour(story, index) {
  const behaviour = story.behaviours[index - 1];

  if (!behaviour) {
    throw new Error(`${story.id} has no behaviour #${index}`);
  }

  return behaviour;
}

// Registers one behaviour of a user story as one test. `index` is 1-based, in
// the order the behaviours appear in the Feature Spec. The title carries the
// story id, which is how the report joins results back to the story.
export function verifyBehaviour(id, index, run) {
  const story = findUserStory(id);

  if (!story) throw new Error(`Unknown user story: ${id}`);

  const behaviour = readBehaviour(story, index);
  const annotation = { type: 'story', description: id };

  test(`${id} · ${behaviour}`, { annotation }, run);
}
