import { Stack } from '@/ui/layout/Stack'
import { CheckList } from '@/ui/molecules/CheckList'
import { LeverLabel } from './LeverLabel'
import { toCheckOptions } from '../toCheckOptions'
import { toggleValue } from '../toggleValue'

// A multi-select lever: its label over a checkbox list. `onChange` receives
// the full new array of picked options.
export function LeverChecks({ lever, value, onChange }) {
  const toggle = (opt) => onChange(toggleValue(value, lever.options, opt))

  return (
    <Stack gap="xs">
      <LeverLabel lever={lever} />
      <CheckList options={toCheckOptions(lever)} selected={value}
        onToggle={toggle} />
    </Stack>
  )
}
