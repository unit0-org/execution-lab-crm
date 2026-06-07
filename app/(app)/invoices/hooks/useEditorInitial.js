'use client'

import { useState, useEffect } from 'react'
import { getInvoiceAction } from '../actions/getInvoice'
import { blankInitial } from './blankInitial'
import { toEditorInitial } from './toEditorInitial'

export function useEditorInitial(mode, id) {
  const start = mode === 'edit' ? undefined : blankInitial()
  const [initial, setInitial] = useState(start)

  useEffect(() => {
    if (mode !== 'edit') return

    getInvoiceAction(id).then((invoice) =>
      setInitial(invoice ? toEditorInitial(invoice) : null))
  }, [mode, id])

  return initial
}
