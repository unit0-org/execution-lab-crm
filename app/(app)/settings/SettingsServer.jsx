import { forbidden } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Tabs } from '@/ui/molecules/Tabs'
import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { visibleSettingsTabs } from './components/settingsTabs'
import { activeSettingsTab } from './components/activeSettingsTab'
import { SettingsTabPanel } from './SettingsTabPanel'

// Settings is open to every org member; the Members tab is admin-only, so
// the visible tabs (and the active one) are scoped to the caller's role.
export async function SettingsServer({ searchParams }) {
  const membership = await currentMembership()

  if (!membership) forbidden()

  const tabs = visibleSettingsTabs(membership.role)
  const { tab } = await searchParams
  const active = activeSettingsTab(tab, tabs)

  return (
    <Stack gap="lg">
      <Heading>Settings</Heading>
      <Tabs tabs={tabs} active={active}
        basePath="/settings" param="tab" />
      <SettingsTabPanel tab={active}
        organizationId={membership.organizationId} />
    </Stack>
  )
}
