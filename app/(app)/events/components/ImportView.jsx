'use client'

import { useImport } from '../hooks/useImport'
import { ImportForm } from './ImportForm'
import { ImportResult } from './ImportResult'

export function ImportView() {
  const { action, result } = useImport()

  if (result?.eventId) return <ImportResult result={result} />

  return <ImportForm action={action} error={result?.error} />
}
