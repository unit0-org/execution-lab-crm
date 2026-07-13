// A story is:
//   not-implemented  no test references its id
//   fail             at least one of its behaviours failed
//   partial          some behaviours verified, none failed, not all covered
//   pass             every behaviour has a passing test
export function statusOfStory(story, specs) {
  const passed = specs.filter((spec) => spec.outcome === 'passed').length;
  const failed = specs.filter((spec) => spec.outcome === 'failed').length;
  const total = story.behaviours.length;

  if (!specs.length) return { status: 'not-implemented', passed, total };

  if (failed) return { status: 'fail', passed, total };

  if (passed >= total) return { status: 'pass', passed, total };

  return { status: 'partial', passed, total };
}
