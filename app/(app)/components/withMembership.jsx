'use client'

import { ExclusiveAccess } from './ExclusiveAccess'
import { useMembership } from '../hooks/useMembership'

// HOC: gate the app on org membership — blank while loading, the WIP notice
// for non-members, otherwise the wrapped shell (handed the membership
// record). Keeps the identity decision out of the presentational shell.
export function withMembership(Wrapped) {
  return function Gated(props) {
    const membership = useMembership()

    if (membership === undefined) return null

    if (membership === null) return <ExclusiveAccess />

    return <Wrapped {...props} membership={membership} />
  }
}
