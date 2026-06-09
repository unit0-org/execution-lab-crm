'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { useAccountActions } from '../hooks/useAccountActions'

export function DisconnectAccount({ id, onChanged }) {
  const { disconnect } = useAccountActions(id, onChanged)

  return <RowDelete onConfirm={disconnect} title="Disconnect" />
}
