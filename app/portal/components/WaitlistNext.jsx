import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { ArrowItem } from '@/ui/molecules/ArrowItem'
import { nextSteps } from './waitlistCopy'

// "What happens next" — the three steps after joining (wave-aware).
export function WaitlistNext({ wave }) {
  return (
    <Card>
      <Stack gap="sm">
        <MonoLabel tone="cold" size={10} caps>What happens next</MonoLabel>
        {nextSteps(wave).map((step) => (
          <ArrowItem key={step}>{step}</ArrowItem>
        ))}
      </Stack>
    </Card>
  )
}
