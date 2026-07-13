// Binds Playwright tests to user stories. Every test title starts with the
// story id (e.g. "CON-01 · ...") so the report can join results back to the
// catalog. Each behaviour in the Feature Spec is one test ("one test each").

import { test, expect } from '@playwright/test';
import { findStory } from '../catalog/index.js';

// Marker prefix on the description group so a whole story reads well in output.
export function story(id) {
  const spec = findStory(id);

  if (!spec) throw new Error(`Unknown user story id: ${id}`);

  return {
    spec,

    // Register one behaviour as one test. `index` is 1-based to match the
    // order the behaviours appear in the Feature Spec for this story.
    behaviour(index, fn, options) {
      const text = spec.behaviours[index - 1];

      if (!text) {
        throw new Error(`${id} has no behaviour #${index} (of ${spec.behaviours.length})`);
      }

      const title = `${id} · ${text}`;
      const annotation = { type: 'story', description: id };
      const opts = { annotation, ...(options || {}) };

      test(title, opts, fn);
    },

    describe(fn) {
      test.describe(`${id} — ${spec.title}`, fn);
    }
  };
}

export { test, expect };
