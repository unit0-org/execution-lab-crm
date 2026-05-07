'use client'

import { IconButton } from '@/ui/IconButton'
import { useDrawer } from '../integrations/hooks/useDrawer'
import { IntegrationsPanel } from '../integrations/components/IntegrationsPanel'

export function SettingsButton() {
  const { open, openDrawer, closeDrawer } = useDrawer()

  return (
    <>
      <IconButton onClick={openDrawer} label="Settings">⚙</IconButton>
      <IntegrationsPanel open={open} onClose={closeDrawer} />
    </>
  )
}
