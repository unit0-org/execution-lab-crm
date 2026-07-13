import { userStories } from './index.js';

const storiesById = new Map(userStories.map((story) => [story.id, story]));

export function findUserStory(id) {
  return storiesById.get(id) || null;
}
