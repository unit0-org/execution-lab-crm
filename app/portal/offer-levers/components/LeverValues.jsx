import { Stack } from '@/ui/layout/Stack'
import { LeverValue } from './LeverValue'

// The values of a lever, stacked in order.
export function LeverValues({ values }) {
  return (
    <Stack gap="lg">
      {values.map((value) => (
        <LeverValue key={value.name} value={value} />
      ))}
    </Stack>
  )
}
