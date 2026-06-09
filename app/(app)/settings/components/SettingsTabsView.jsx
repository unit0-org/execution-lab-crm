'use client'

import { useSearchParams } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Tabs } from '@/ui/molecules/Tabs'
import { settingsTabsFor } from './settingsTabs'
import { usePlatformOwner } from '../hooks/usePlatformOwner'
import { SettingsPanel } from './SettingsPanel'

export function SettingsTabsView() {
  const active = useSearchParams().get('tab') || 'members'
  const tabs = settingsTabsFor(usePlatformOwner())

  return (
    <Stack gap="lg">
      <Heading>Settings</Heading>
      <Tabs tabs={tabs} active={active}
        basePath="/settings" param="tab" />
      <SettingsPanel tab={active} />
    </Stack>
  )
}
