// Walks Playwright's nested {suites:[{suites,specs}]} tree.
function* eachSpec(node) {
  for (const spec of node.specs || []) yield spec;

  for (const child of node.suites || []) yield* eachSpec(child);
}

function outcomeOf(spec) {
  const statuses = (spec.tests || []).map((test) => test.status);
  const allSkipped =
    statuses.length && statuses.every((status) => status === 'skipped');

  if (allSkipped) return 'skipped';

  return spec.ok ? 'passed' : 'failed';
}

export function readSpecs(report) {
  const specs = [];

  for (const spec of eachSpec(report || {})) {
    specs.push({ title: spec.title || '', outcome: outcomeOf(spec) });
  }

  return specs;
}
