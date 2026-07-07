import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { Text } from '@/ui/atoms/Text'

// Marks a generated offer as one the member is actively selling. Many
// offers can be active at once. `onChange` receives the next boolean.
export function ActiveToggle({ checked, onChange }) {
  const flip = () => onChange(!checked)

  return (
    <Inline gap="sm">
      <Checkbox checked={checked} onChange={flip} label="Active" />
      <Text size="sm" tone="muted" gutter="none">
        Active — currently selling this offer
      </Text>
    </Inline>
  )
}
