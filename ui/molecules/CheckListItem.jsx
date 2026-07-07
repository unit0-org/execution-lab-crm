import { Inline } from '../layout/Inline'
import { Stack } from '../layout/Stack'
import { Text } from '../atoms/Text'
import { Checkbox } from '../atoms/Checkbox'

// One checkbox row: the box, its label, and a muted description beneath.
export function CheckListItem({ option, checked, onToggle }) {
  const flip = () => onToggle(option.value)

  return (
    <Inline gap="sm" align="start">
      <Checkbox checked={checked} onChange={flip} label={option.label} />
      <Stack gap="xs">
        <Text size="sm" gutter="none">{option.label}</Text>
        <Text size="sm" tone="muted" gutter="none">{option.desc}</Text>
      </Stack>
    </Inline>
  )
}
