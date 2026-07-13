'use client'

import { useRouter } from 'next/navigation'
import { Popover } from '@/ui/molecules/Popover'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { useToggle } from '@/ui/molecules/useToggle'
import { AutomationTrigger } from './AutomationTrigger'
import { AutomationMenuPanel } from './AutomationMenuPanel'

// Topbar lightning menu: opens a small "Automation" menu whose one entry,
// "Actions", goes to the automations page.
export function AutomationMenu() {
  const router = useRouter()
  const menu = useToggle()
  const go = () => { menu.hide(); router.push('/automations') }
  const trigger = <AutomationTrigger onClick={menu.toggle} />

  return (
    <Popover open={menu.open} onClose={menu.hide} trigger={trigger} align="end">
      <AutomationMenuPanel onActions={go} />
    </Popover>
  )
}
