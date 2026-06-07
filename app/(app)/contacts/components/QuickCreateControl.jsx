'use client'

import { Button } from '@/ui/atoms/Button'
import { QuickContactForm } from './QuickContactForm'

export function QuickCreateControl({ allowCreate, quick }) {
  if (!allowCreate) return null

  return (
    <>
      <Button onClick={quick.modal.show}>New contact</Button>
      <QuickContactForm quick={quick} />
    </>
  )
}
