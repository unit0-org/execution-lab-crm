// Walks Playwright's nested {suites:[{suites,specs}]} tree, carrying down the
// spec FILE — a spec's own `file` points at verifyBehaviour.js (where test() is
// called), so the enclosing suite is what actually names the test file.
export function* eachSpec(node, file) {
  const current = node.file || file;

  for (const spec of node.specs || []) yield { spec, file: current };

  for (const child of node.suites || []) yield* eachSpec(child, current);
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
