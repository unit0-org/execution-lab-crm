'use client'

import { useActionState } from 'react'
import { importCsvAction } from '../actions/importCsv'

export function useImport() {
  const [result, action] = useActionState(importCsvAction, null)

  return { action, result }
}
