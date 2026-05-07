'use client'

import { Drawer } from '@/ui/Drawer'
import { Stack } from '@/ui/Stack'
import { PanelHeader } from './PanelHeader'
import { IntegrationsList } from './IntegrationsList'

export function IntegrationsPanel({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <Stack gap="lg">
        <PanelHeader onClose={onClose} />
        <IntegrationsList />
      </Stack>
    </Drawer>
  )
}
