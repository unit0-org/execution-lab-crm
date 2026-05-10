'use client'

import { useTransition } from 'react'
import { Button } from '@/ui/Button'
import { Spinner } from '@/ui/Spinner'
import { useToast } from '@/ui/Toaster'
import { refreshNow } from '../../actions/refreshNow'

export function RefreshNowButton() {
  const [pending, start] = useTransition()
  const { push } = useToast()
  const onClick = () => start(async () => {
    const r = await refreshNow()
    push({ message: r.ok ? `Syncing ${r.started} account(s)…` : r.error || 'Refresh failed' })
  })

  return (
    <Button size="sm" onClick={onClick} disabled={pending}>
      {pending ? <Spinner size={12} /> : '↻ Refresh now'}
    </Button>
  )
}
