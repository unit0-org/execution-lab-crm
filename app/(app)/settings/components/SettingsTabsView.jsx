'use client'

import { useSearchParams } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Tabs } from '@/ui/molecules/Tabs'
import { SETTINGS_TABS } from './settingsTabs'
import { SettingsPanel } from './SettingsPanel'

export function SettingsTabsView() {
  const active = useSearchParams().get('tab') || 'members'

  return (
    <Stack gap="lg">
      <Heading>Settings</Heading>
      <Tabs tabs={SETTINGS_TABS} active={active}
        basePath="/settings" param="tab" />
      <SettingsPanel tab={active} />
    </Stack>
  )
}
