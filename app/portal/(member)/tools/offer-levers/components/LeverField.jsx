import { Stack } from '@/ui/layout/Stack'
import { Slider } from '@/ui/atoms/Slider'
import { LeverLabel } from './LeverLabel'
import { LeverOption } from './LeverOption'
import { LeverChecks } from './LeverChecks'

// A lever: its label (with an info popover) over a slider that snaps across
// the options, then the picked option's name + description below. Multi-select
// levers render an always-visible checkbox list instead.
export function LeverField({ lever, value, onChange }) {
  if (lever.multi) {
    return <LeverChecks lever={lever} value={value} onChange={onChange} />
  }

  const index = Math.max(0, lever.options.indexOf(value))

  return (
    <Stack gap="xs">
      <LeverLabel lever={lever} />
      <Slider options={lever.options} value={value} onChange={onChange}
        aria-label={lever.label} />
      <LeverOption name={value} desc={lever.optDesc[index]} />
    </Stack>
  )
}
