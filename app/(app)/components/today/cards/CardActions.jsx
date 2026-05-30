import { Inline } from '@/ui/Inline'
import { SubmitButton } from '@/ui/SubmitButton'
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
          <SubmitButton tone="primary" size="sm">{confirmLabel}</SubmitButton>
        </InlineForm>
        <InlineForm action={dismissCardAction}>
          <HiddenId value={cardId} />
          <SubmitButton size="sm">No</SubmitButton>
        </InlineForm>
      </Inline>
      <SnoozeMenu action={snoozeCardAction} idValue={cardId} idName="card_id" />
    </Inline>
  )
}
