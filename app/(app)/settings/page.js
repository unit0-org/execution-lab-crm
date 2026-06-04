import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { AdminOnly } from './components/AdminOnly'
import { SettingsView } from './components/SettingsView'
import { IntegrationsView } from './components/IntegrationsView'

export default function SettingsPage() {
  return (
    <Page width="wide">
      <AdminOnly>
        <Stack gap="lg">
          <Stack gap="md">
            <Heading>Members</Heading>
            <SettingsView />
          </Stack>
          <Stack gap="md">
            <Heading>Integrations</Heading>
            <IntegrationsView />
          </Stack>
        </Stack>
      </AdminOnly>
    </Page>
  )
}
