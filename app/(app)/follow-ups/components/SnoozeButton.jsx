import { Button } from '@/ui/Button'
import { InlineForm } from '@/ui/InlineForm'
import { snooze } from '../actions'
import { optionDate } from '@/lib/follow_ups/snoozeOptions'

export function SnoozeButton({ flagId, option }) {
  return (
    <InlineForm action={snooze}>
      <input type="hidden" name="flag_id" value={flagId} />
      <input type="hidden" name="due_date" value={optionDate(option)} />
      <Button type="submit" size="sm">{option.label}</Button>
    </InlineForm>
  )
}
