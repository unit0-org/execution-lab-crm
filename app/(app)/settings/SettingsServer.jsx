import { forbidden } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Tabs } from '@/ui/molecules/Tabs'
import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { SETTINGS_TABS } from './components/settingsTabs'
import { SettingsTabPanel } from './SettingsTabPanel'

// Gate settings to org admins (a real 403), then render the active tab
// server-side, keyed on the ?tab search param.
export async function SettingsServer({ searchParams }) {
  const membership = await currentMembership()

  if (membership?.role !== 'admin') forbidden()

  const { tab } = await searchParams
  const active = tab || 'members'

  return (
    <Stack gap="lg">
      <Heading>Settings</Heading>
      <Tabs tabs={SETTINGS_TABS} active={active}
        basePath="/settings" param="tab" />
      <SettingsTabPanel tab={active}
        organizationId={membership.organizationId} />
    </Stack>
  )
}
