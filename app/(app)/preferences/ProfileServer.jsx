import { getMemberProfileAction } from './actions/getMemberProfile'
import { ProfileView } from './components/ProfileView'

// Server-side load for the current member's profile tab.
export async function ProfileServer() {
  const profile = await getMemberProfileAction()

  return <ProfileView profile={profile} />
}
