// The full user-story catalog: every story from the Feature Spec artifact,
// grouped by domain. Tests tag themselves with a story id (e.g. 'CON-01');
// the report joins results back to this catalog so every story is listed,
// even the ones with no test yet (reported as "not implemented").

import * as contacts from './contacts.js';
import * as cohorts from './cohorts.js';
import * as portal from './portal.js';
import * as invoices from './invoices.js';
import * as meetings from './meetings.js';
import * as ops from './ops.js';

const modules = [contacts, cohorts, portal, invoices, meetings, ops];

export const domains = modules.map((module) => ({
  ...module.domain,
  stories: module.stories.map((story) => ({
    ...story,
    guarantee: Boolean(story.guarantee),
    domainCode: module.domain.code,
    domainTitle: module.domain.title
  }))
}));

export const stories = domains.flatMap((domain) => domain.stories);

export const storyById = new Map(stories.map((story) => [story.id, story]));

export function findStory(id) {
  return storyById.get(id) || null;
}

export const totals = {
  domains: domains.length,
  stories: stories.length,
  guarantees: stories.filter((story) => story.guarantee).length,
  behaviours: stories.reduce((sum, story) => sum + story.behaviours.length, 0)
};
