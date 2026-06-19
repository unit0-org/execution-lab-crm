import { currentUser } from '@/lib/auth/currentUser'
import { currentMemberProfile } from './currentMemberProfile'

// The acting member's id + display name, to attribute their mentions.
export async function currentActor() {
  const user = await currentUser()
  const profile = await currentMemberProfile(user.id)

  return {
    actorUserId: user.id,
    actorName: (profile && profile.displayName) || user.email
  }
}
