import { Inline } from '@/ui/Inline'
import { FeedbackForm } from '@/ui/FeedbackForm'
import { SubmitButton } from '@/ui/SubmitButton'
import { SnoozeMenu } from '../SnoozeMenu'
import { confirmCardAction, dismissCardAction, snoozeCardAction } from '../../../actions/cards'

const HiddenId = ({ value }) => <input type="hidden" name="card_id" value={value} />

export function CardActions({ cardId, confirmLabel = 'Yes' }) {
  return (
    <Inline gap="md" justify="space-between">
      <Inline gap="sm">
        <FeedbackForm action={confirmCardAction} success="Done." display="inline">
          <HiddenId value={cardId} />
          <SubmitButton tone="primary" size="sm">{confirmLabel}</SubmitButton>
        </FeedbackForm>
        <FeedbackForm action={dismissCardAction} success="Dismissed." display="inline">
          <HiddenId value={cardId} />
          <SubmitButton size="sm">No</SubmitButton>
        </FeedbackForm>
      </Inline>
      <SnoozeMenu action={snoozeCardAction} idValue={cardId} idName="card_id" />
    </Inline>
  )
}
