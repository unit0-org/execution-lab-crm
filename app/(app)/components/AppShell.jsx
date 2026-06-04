'use client'

import { ExclusiveAccess } from './ExclusiveAccess'
import { AppFrame } from './AppFrame'
import { useMembership } from '../hooks/useMembership'

// Gate the app on org membership: blank while loading, the WIP notice
// for non-members, otherwise the full app frame.
export function AppShell({ children }) {
  const membership = useMembership()

  if (membership === undefined) return null

  if (membership === null) return <ExclusiveAccess />

  return <AppFrame role={membership.role}>{children}</AppFrame>
}
