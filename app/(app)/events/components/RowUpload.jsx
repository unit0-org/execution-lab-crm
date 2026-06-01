'use client'

import { Spinner } from '@/ui/atoms/Spinner'
import { IconUpload } from '@/ui/molecules/IconUpload'
import { useReimport } from '../hooks/useReimport'

// Upload an updated Luma CSV for this event; re-imports in place.
export function RowUpload({ eventId, onUpdated }) {
  const { busy, onPick } = useReimport(eventId, onUpdated)

  if (busy) return <Spinner size={12} />

  return (
    <IconUpload label="Upload CSV" title="Upload a new CSV file"
      onPick={onPick} />
  )
}
