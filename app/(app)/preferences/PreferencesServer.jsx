import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { ProfileServer } from './ProfileServer'
import { AppearanceView } from './components/AppearanceView'

// Personal preferences: the member's own profile and their light/dark
// theme. Org/admin settings stay on the separate /settings page.
export function PreferencesServer() {
  return (
    <Stack gap="lg">
      <Heading>Preferences</Heading>
      <ProfileServer />
      <AppearanceView />
    </Stack>
  )
}
