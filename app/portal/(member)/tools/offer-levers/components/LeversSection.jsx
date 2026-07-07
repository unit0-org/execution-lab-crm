import { Card } from '@/ui/atoms/Card'
import { Collapsible } from '@/ui/molecules/Collapsible'
import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { LeverGrid } from './LeverGrid'
import { CopyPromptBar } from './CopyPromptBar'

export function LeversSection({ values, onField, onCopy }) {
  return (
    <Card>
      <Stack gap="md">
        <Collapsible title="Offer levers">
          <Stack gap="md">
            <Text size="sm" tone="muted" gutter="none">
              Fifteen structural dials. Set them to the shape you have in mind.
            </Text>
            <LeverGrid values={values} onField={onField} />
          </Stack>
        </Collapsible>
        <CopyPromptBar onCopy={onCopy} />
      </Stack>
    </Card>
  )
}
