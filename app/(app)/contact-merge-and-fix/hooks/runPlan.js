import { mergeContactsAction } from '@/app/(app)/contacts/actions/mergeContacts'
import { applyFixesAction } from '../actions/applyFixes'

const runMerge = (merge) =>
  mergeContactsAction(merge.winnerId, merge.loserIds)

// Merges run one after another — each is the same single-merge operation the
// review modal has always used, so a batch adds no new merge path — and the
// fixes follow in their one transaction.
const runFixes = (fixes) => {
  const targets = fixes.map((fix) => ({ type: fix.type, id: fix.id }))

  if (!targets.length) return Promise.resolve()

  return applyFixesAction(targets)
}

export function runPlan(plan) {
  const merges = plan.merges.reduce(
    (chain, merge) => chain.then(() => runMerge(merge)),
    Promise.resolve()
  )

  return merges.then(() => runFixes(plan.fixes))
}
