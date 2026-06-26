import { Inline } from '@/ui/layout/Inline'
import { TextButton } from '@/ui/atoms/TextButton'
import { Badge } from '@/ui/atoms/Badge'
import { Icon } from '@/ui/atoms/Icon'

// The Tools-cell trigger: "Tools (n) ▾", opens the access popover.
export function ToolAccessTrigger({ count, onClick }) {
  return (
    <TextButton type="button" onClick={onClick} aria-label="Manage tools">
      <Inline gap="xs" nowrap>
        Tools
        <Badge tone="neutral">{count}</Badge>
        <Icon name="chevron" size={14} />
      </Inline>
    </TextButton>
  )
}
