'use client'

import { useSupabaseStatus } from '../hooks/useSupabaseStatus'
import { SupabaseStatusBadge } from './SupabaseStatusBadge'

export function SupabaseStatusRow() {
  const status = useSupabaseStatus()
  return <SupabaseStatusBadge status={status} />
}
