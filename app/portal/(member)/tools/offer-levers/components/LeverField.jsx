import { Stack } from '@/ui/layout/Stack'
import { Slider } from '@/ui/atoms/Slider'
import { LeverLabel } from './LeverLabel'
import { LeverOption } from './LeverOption'

// A lever: its label (with an info popover) over a slider that snaps across
// the options, then the picked option's name + description below.
export function LeverField({ lever, value, onChange }) {
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
