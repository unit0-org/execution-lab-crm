import { Stack } from '@/ui/layout/Stack'
import { PlanMergeLine } from './PlanMergeLine'
import { PlanFixLine } from './PlanFixLine'
import { groupKey } from '../hooks/groupKey'
import { fixKey } from '../hooks/fixKey'

// Every merge and every fix the confirm is about to run, in one list — what
// you read here is exactly what runs.
export function PlanReview({ plan }) {
  return (
    <Stack gap="xs">
      {plan.merges.map((merge) => (
        <PlanMergeLine key={groupKey(merge.group)} merge={merge} />
      ))}
      {plan.fixes.map((fix) => <PlanFixLine key={fixKey(fix)} fix={fix} />)}
    </Stack>
  )
}
