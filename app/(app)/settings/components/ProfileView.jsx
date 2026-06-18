import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { ProfileForm } from './ProfileForm'

// The current member's editable profile: their display name (how they
// appear to teammates, e.g. in mentions) and their sign-in email.
export function ProfileView({ profile }) {
  return (
    <Stack gap="md">
      <SectionHeader title="Your profile" />
      <ProfileForm profile={profile} />
    </Stack>
  )
}
