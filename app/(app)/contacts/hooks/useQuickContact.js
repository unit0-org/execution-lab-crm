'use client'

import { useState } from 'react'
import { useToggle } from '@/ui/molecules/useToggle'
import { quickCreateContactAction } from '../actions/quickCreateContact'

export function useQuickContact(onCreated) {
  const modal = useToggle()
  const [name, setName] = useState('')

  const open = (value) => { setName(value || ''); modal.show() }
  const create = (form) =>
    quickCreateContactAction(form).then((res) => {
      if (!res.ok) return

      onCreated(res)
      modal.hide()
    })

  return { modal, name, open, create }
}
