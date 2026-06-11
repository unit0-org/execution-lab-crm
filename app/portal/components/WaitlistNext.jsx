import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { ArrowItem } from '@/ui/molecules/ArrowItem'
import { NEXT_STEPS } from './waitlistCopy'

// "What happens next" — the steps after joining (no position/wave shown).
export function WaitlistNext() {
  return (
    <Card>
      <Stack gap="sm">
        <MonoLabel tone="cold" size={10} caps>What happens next</MonoLabel>
        {NEXT_STEPS.map((step) => (
          <ArrowItem key={step}>{step}</ArrowItem>
        ))}
      </Stack>
    </Card>
  )
}
