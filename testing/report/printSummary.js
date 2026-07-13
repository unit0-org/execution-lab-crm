import { reportFile } from '../config/paths.js';

export function printSummary(summary) {
  const { counts, behavioursPassed, behavioursTotal } = summary;

  console.log(`Report written to ${reportFile}`);
  console.log(
    `  pass ${counts.pass} · partial ${counts.partial} · ` +
      `fail ${counts.fail} · not implemented ${counts.notImplemented}`
  );
  console.log(
    `  behaviours verified ${behavioursPassed}/${behavioursTotal}`
  );
}
