import { Page } from '@/ui/layout/Page'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { SettingsView } from './components/SettingsView'

export default function SettingsPage() {
  return (
    <Page width="wide">
      <Stack gap="md">
        <Heading>Members</Heading>
        <SettingsView />
      </Stack>
    </Page>
  )
}
