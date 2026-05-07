import { Button } from '@/ui/Button'
import { InlineForm } from '@/ui/InlineForm'
import { markDone } from '../actions'

export function MarkDoneForm({ flagId }) {
  return (
    <InlineForm action={markDone}>
      <input type="hidden" name="flag_id" value={flagId} />
      <Button type="submit" size="sm">Done</Button>
    </InlineForm>
  )
}
