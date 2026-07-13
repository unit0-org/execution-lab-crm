import { eachSpec, outcomeOf, lastResult } from './specWalk.js';
import { specLog } from './specLog.js';
import { specAttachments } from './specAttachments.js';

export function readSpecs(report) {
  const specs = [];

  for (const spec of eachSpec(report || {})) {
    const result = lastResult(spec);

    specs.push({
      title: spec.title || '',
      outcome: outcomeOf(spec),
      duration: result.duration || 0,
      log: specLog(result),
      attachments: specAttachments(result)
    });
  }

  return specs;
}
