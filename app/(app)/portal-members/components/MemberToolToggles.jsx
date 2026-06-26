'use client'

import { Stack } from '@/ui/layout/Stack'
import { Popover } from '@/ui/molecules/Popover'
import { useToggle } from '@/ui/molecules/useToggle'
import { useMemberToolAccess } from '../hooks/useMemberToolAccess'
import { ToolAccessTrigger } from './ToolAccessTrigger'
import { MemberToolToggle } from './MemberToolToggle'

// The Tools cell: a trigger showing how many tools a member holds, opening
// a popover of per-tool checkboxes.
export function MemberToolToggles({ contactId, tools, granted }) {
  const pop = useToggle()
  const access = useMemberToolAccess(contactId, granted)
  const trigger = <ToolAccessTrigger count={access.count}
    onClick={pop.toggle} />

  return (
    <Popover open={pop.open} onClose={pop.hide} trigger={trigger}>
      <Stack gap="sm">
        {tools.map((tool) => (
          <MemberToolToggle key={tool.key} tool={tool}
            checked={access.has(tool.key)} onToggle={access.toggle} />
        ))}
      </Stack>
    </Popover>
  )
}
