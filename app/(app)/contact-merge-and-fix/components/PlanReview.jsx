import { Stack } from '@/ui/layout/Stack'
import { PlanMergeLine } from './PlanMergeLine'
import { PlanFixLine } from './PlanFixLine'
import { groupSelectionKey, fixSelectionKey } from '../hooks/selectionKeys'

// Every merge and every fix the confirm is about to run, in one list — what
// you read here is exactly what runs, and each line ticks off as it lands.
export function PlanReview({ plan, progress }) {
  return (
    <Stack gap="xs">
      {plan.merges.map((merge) => (
        <PlanMergeLine key={groupSelectionKey(merge.group)} merge={merge}
          done={progress.isDone(groupSelectionKey(merge.group))} />
      ))}
      {plan.fixes.map((fix) => (
        <PlanFixLine key={fixSelectionKey(fix)} fix={fix}
          done={progress.isDone(fixSelectionKey(fix))} />
      ))}
    </Stack>
  )
}
