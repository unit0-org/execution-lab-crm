import { currentUser } from './currentUser'
import { isPlatformOwner } from '@/lib/org/controllers/isPlatformOwner'
import { denied } from './denied'

// Wrap a server action so only the CRM platform owner may run it; the
// handler receives the signed-in user. Everyone else gets a 403.
export function withOwner(handler, fallback = denied()) {
  return async (...args) => {
    const user = await currentUser()

    if (!isPlatformOwner(user?.email)) return fallback

    return handler(user, ...args)
  }
}
