import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { NumberedStep } from '@/ui/molecules/NumberedStep'
import { EXPLAINER_STEPS, EXPLAINER_FOOTER } from './waitlistCopy'

// The sidebar explaining how the wave mechanic works.
export function WaitlistExplainer() {
  return (
    <Card>
      <Stack gap="md">
        <MonoLabel tone="cold" size={10} caps>How the waitlist works</MonoLabel>
        <Stack gap="md">
          {EXPLAINER_STEPS.map((step, i) => (
            <NumberedStep key={step.title} n={i + 1} title={step.title}
              desc={step.desc} />
          ))}
        </Stack>
        <MonoLabel tone="cool" size={11}>{EXPLAINER_FOOTER}</MonoLabel>
      </Stack>
    </Card>
  )
}
