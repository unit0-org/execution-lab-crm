import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { Text } from '@/ui/atoms/Text'

// One tool row inside the access popover: a checkbox plus the tool name.
export function MemberToolToggle({ tool, checked, onToggle }) {
  return (
    <Inline gap="sm">
      <Checkbox checked={checked} label={tool.name}
        onChange={() => onToggle(tool.key)} />
      <Text gutter="none">{tool.name}</Text>
    </Inline>
  )
}
