import { Card } from '@/ui/Card'
import { Stack } from '@/ui/Stack'
import { Text } from '@/ui/Text'
import { CardActions } from './CardActions'
import { CardEditButton } from './CardEditButton'

export function CardShell({ card, prompt, body, fieldName, confirmLabel }) {
  return (
    <Card>
      <Stack gap="sm">
        <Text tone="muted" size="sm">{prompt}</Text>
        <Text>{body}</Text>
        <CardActions cardId={card.id} confirmLabel={confirmLabel} />
        <CardEditButton card={card} fieldName={fieldName} />
      </Stack>
    </Card>
  )
}
