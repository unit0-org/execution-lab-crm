'use client'

import { Popover } from '@/ui/molecules/Popover'
import { Stack } from '@/ui/layout/Stack'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { useToggle } from '@/ui/molecules/useToggle'
import { AddMenuTrigger } from './AddMenuTrigger'
import { contactAddItems } from '../hooks/contactAddItems'

const runThenClose = (open, pop) => () => {
  pop.hide()
  open()
}

// The contact's quick-add actions, folded into one "Add" menu in the
// page actions (replaces the old always-visible button bar).
export function ContactAddMenu({ act }) {
  const pop = useToggle()

  return (
    <Popover open={pop.open} onClose={pop.hide} align="end"
      trigger={<AddMenuTrigger onClick={pop.toggle} />}>
      <Stack gap="xs">
        {contactAddItems(act).map((item) => (
          <MenuRow key={item.label} label={item.label}
            onClick={runThenClose(item.open, pop)} />
        ))}
      </Stack>
    </Popover>
  )
}
