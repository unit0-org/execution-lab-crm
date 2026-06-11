import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { NumberedStep } from '@/ui/molecules/NumberedStep'
import { CONFIRM_STEPS } from './confirmCopy'

// The "what happens next" steps after a confirmed seat.
export function ConfirmNext() {
  return (
    <Card>
      <Stack gap="md">
        <MonoLabel tone="cool" size={10} caps>What happens next</MonoLabel>
        <Stack gap="md">
          {CONFIRM_STEPS.map((step, i) => (
            <NumberedStep key={step.title} n={i + 1} title={step.title}
              desc={step.desc} />
          ))}
        </Stack>
      </Stack>
    </Card>
  )
}
