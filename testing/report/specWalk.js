// Walks Playwright's nested {suites:[{suites,specs}]} tree.
export function* eachSpec(node) {
  for (const spec of node.specs || []) yield spec;

  for (const child of node.suites || []) yield* eachSpec(child);
}

export function outcomeOf(spec) {
  const statuses = (spec.tests || []).map((test) => test.status);
  const skipped =
    statuses.length && statuses.every((status) => status === 'skipped');

  if (skipped) return 'skipped';

  return spec.ok ? 'passed' : 'failed';
}

// The last attempt is the one that decided the outcome.
export function lastResult(spec) {
  const results = (spec.tests || []).flatMap((test) => test.results || []);

  return results.length ? results[results.length - 1] : {};
}
