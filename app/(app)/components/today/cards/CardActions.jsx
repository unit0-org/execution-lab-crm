import { Inline } from '@/ui/Inline'
import { Button } from '@/ui/Button'
import { InlineForm } from '@/ui/InlineForm'
import { SnoozeMenu } from '../SnoozeMenu'
import { confirmCardAction, dismissCardAction, snoozeCardAction } from '../../../actions/cards'

const HiddenId = ({ value }) => <input type="hidden" name="card_id" value={value} />

export function CardActions({ cardId, confirmLabel = 'Yes' }) {
  return (
    <Inline gap="md" justify="space-between">
      <Inline gap="sm">
        <InlineForm action={confirmCardAction}>
          <HiddenId value={cardId} />
          <Button type="submit" tone="primary" size="sm">{confirmLabel}</Button>
        </InlineForm>
        <InlineForm action={dismissCardAction}>
          <HiddenId value={cardId} />
          <Button type="submit" size="sm">No</Button>
        </InlineForm>
      </Inline>
      <SnoozeMenu action={snoozeCardAction} idValue={cardId} idName="card_id" />
    </Inline>
  )
}
