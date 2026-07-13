'use client'

import { AppFrame } from './AppFrame'
import { withMembership } from './withMembership'

// The app frame for a confirmed member. Membership gating (loading /
// non-member) lives in withMembership; this stays presentational.
function AppShellBody({ membership, email, unread, children }) {
  return (
    <AppFrame role={membership.role} email={email} unread={unread}>
      {children}
    </AppFrame>
  )
}

export const AppShell = withMembership(AppShellBody)
