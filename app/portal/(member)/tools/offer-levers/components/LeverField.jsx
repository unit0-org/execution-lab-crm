import { Stack } from '@/ui/layout/Stack'
import { Select } from '@/ui/atoms/Select'
import { LeverLabel } from './LeverLabel'

// A lever: its label (with an info popover) above the options dropdown.
export function LeverField({ lever, value, onChange }) {
  return (
    <Stack gap="xs">
      <LeverLabel lever={lever} />
      <Select options={lever.options} value={value} onChange={onChange}
        aria-label={lever.label} />
    </Stack>
  )
}
