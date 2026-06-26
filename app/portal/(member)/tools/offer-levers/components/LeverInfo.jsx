import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { LeverOption } from './LeverOption'

// Popover content for a lever: what the dimension means, then one line per
// option.
export function LeverInfo({ lever }) {
  return (
    <Stack gap="sm">
      <Text size="sm" gutter="none">{lever.desc}</Text>
      <Stack gap="sm">
        {lever.options.map((option, i) => (
          <LeverOption key={option} name={option}
            desc={lever.optDesc[i]} />
        ))}
      </Stack>
    </Stack>
  )
}
