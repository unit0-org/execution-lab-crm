'use client'

import { AppFrame } from './AppFrame'
import { withMembership } from './withMembership'

// The app frame for a confirmed member. Membership gating (loading /
// non-member) lives in withMembership; this stays presentational.
function AppShellBody(props) {
  const { membership, email, unread, mergeFixCount, children } = props

  return (
    <AppFrame role={membership.role} email={email} unread={unread}
      mergeFixCount={mergeFixCount}>
      {children}
    </AppFrame>
  )
}

export const AppShell = withMembership(AppShellBody)
