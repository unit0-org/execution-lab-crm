import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { FieldLabel } from './FieldLabel'

export function AnswerNugget({ nugget }) {
  return (
    <Card>
      <Stack gap="xs">
        <FieldLabel label={nugget.question} />
        <Text gutter="none">{nugget.answer}</Text>
        <Text size="sm" tone="muted" gutter="none">{nugget.event}</Text>
      </Stack>
    </Card>
  )
}
