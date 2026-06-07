'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { quickCreateContactAction } from '../actions/quickCreateContact'

export function useQuickContact(onCreated) {
  const modal = useToggle()

  const create = (form) =>
    quickCreateContactAction(form).then((res) => {
      if (!res.ok) return

      onCreated(res)
      modal.hide()
    })

  return { modal, create }
}
