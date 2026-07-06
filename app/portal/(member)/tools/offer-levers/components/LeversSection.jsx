import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { LeverGrid } from './LeverGrid'

export function LeversSection({ values, onField }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={2} gutter="none">Offer levers</Heading>
        <Text size="sm" tone="muted" gutter="none">
          Fifteen structural dials. Set them to the shape you have in mind.
        </Text>
        <LeverGrid values={values} onField={onField} />
      </Stack>
    </Card>
  )
}
