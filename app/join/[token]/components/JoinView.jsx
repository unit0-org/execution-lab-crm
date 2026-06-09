'use client'

import { useParams } from 'next/navigation'
import { useFounderInvite } from '../hooks/useFounderInvite'
import { JoinForm } from './JoinForm'
import { JoinInvalid } from './JoinInvalid'

// Branch on the invite status: blank while loading, the setup form when
// valid, otherwise an explanatory notice.
export function JoinView() {
  const { token } = useParams()
  const status = useFounderInvite(token)

  if (status === undefined) return null

  if (status !== 'ok') return <JoinInvalid status={status} />

  return <JoinForm token={token} />
}
