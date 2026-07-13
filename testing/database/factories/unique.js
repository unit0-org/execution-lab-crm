import { randomUUID } from 'node:crypto';

function suffix() {
  return randomUUID().slice(0, 8);
}

// Unique by default is what keeps tests independent WITHOUT resetting the
// database between each one: two tests can never collide on the same row.
export function uniqueName(prefix) {
  return `${prefix}-${suffix()}`;
}

export function uniqueEmail(prefix = 'person') {
  return `${prefix}-${suffix()}@e2e.test`;
}
