'use client'

import { Radio } from '@/ui/atoms/Radio'
import { useAccountActions } from '../hooks/useAccountActions'

export function PrimaryToggle({ account, onChanged }) {
  const { makePrimary } = useAccountActions(account.id, onChanged)

  return (
    <Radio checked={account.is_primary} onChange={makePrimary}
      label="Primary" />
  )
}
