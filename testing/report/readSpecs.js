import { eachSpec, outcomeOf, lastResult } from './specWalk.js';
import { specLog } from './specLog.js';
import { specAttachments } from './specAttachments.js';

const TESTS_ROOT = 'testing/tests';

export function readSpecs(report) {
  const specs = [];

  for (const { spec, file } of eachSpec(report || {})) {
    const result = lastResult(spec);

    specs.push({
      title: spec.title || '',
      outcome: outcomeOf(spec),
      duration: result.duration || 0,
      file: file ? `${TESTS_ROOT}/${file}` : '',
      log: specLog(result),
      attachments: specAttachments(result)
    });
  }

  return specs;
}
