'use client'

import { Checkbox } from '@/ui/atoms/Checkbox'
import { useAccountActions } from '../hooks/useAccountActions'

export function SyncToggle({ account, onChanged }) {
  const { setSync } = useAccountActions(account.id, onChanged)
  const toggle = (e) => setSync(e.target.checked)

  return (
    <Checkbox checked={account.contacts_sync_enabled} onChange={toggle}
      label="Enable contacts sync" />
  )
}
