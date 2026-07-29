import { mergeContactsAction } from '@/app/(app)/contacts/actions/mergeContacts'
import { applyFixesAction } from '../actions/applyFixes'
import { groupSelectionKey, fixSelectionKey } from './selectionKeys'
import { failIfError } from './failIfError'

const runMerge = (merge, onLanded) =>
  mergeContactsAction(merge.winnerId, merge.loserIds)
    .then(failIfError)
    .then(() => onLanded([groupSelectionKey(merge.group)]))

// Merges run one after another — each is the same single-merge operation the
// review modal has always used, so a batch adds no new merge path — and the
// fixes follow in their one transaction. Every landing is reported through
// `onLanded` as it happens, so a run this long can be watched.
const runFixes = (fixes, onLanded) => {
  if (!fixes.length) return Promise.resolve()

  const targets = fixes.map((fix) => ({ type: fix.type, id: fix.id }))

  return applyFixesAction(targets)
    .then(failIfError)
    .then(() => onLanded(fixes.map(fixSelectionKey)))
}

export function runPlan(plan, onLanded) {
  const merges = plan.merges.reduce(
    (chain, merge) => chain.then(() => runMerge(merge, onLanded)),
    Promise.resolve()
  )

  return merges.then(() => runFixes(plan.fixes, onLanded))
}
