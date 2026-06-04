'use client'

import { Insight } from '@/ui/molecules/Insight'
import { useContactSpend } from '../hooks/useContactSpend'

export function TotalSpent({ contactId }) {
  const spend = useContactSpend(contactId)

  if (!spend) return null

  return <Insight label="Total spent" value={spend} />
}
