'use client'

import { Button } from '@/ui/Button'
import { useCtrlK } from '../log-modal/hooks/useCtrlK'
import { LogInteractionModal } from '../log-modal/components/LogInteractionModal'

export function LogInteractionCTA() {
  const { open, openModal, closeModal } = useCtrlK()

  return (
    <>
      <Button tone="primary" size="sm" onClick={openModal}>+ Log interaction</Button>
      <LogInteractionModal open={open} onClose={closeModal} />
    </>
  )
}
