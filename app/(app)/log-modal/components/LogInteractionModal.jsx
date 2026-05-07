'use client'

import { Modal } from '@/ui/Modal'
import { useDraftStep } from '../hooks/useDraftStep'
import { Step1Input } from './Step1Input'
import { Step2Review } from './Step2Review'

export function LogInteractionModal({ open, onClose }) {
  const { text, setText, draft, submitText, reset } = useDraftStep()

  const close = () => { reset(); onClose() }

  return (
    <Modal open={open} onClose={close}>
      {!draft && <Step1Input text={text} setText={setText} submitText={submitText} onClose={close} />}
      {draft && <Step2Review draft={draft} onCancel={reset} onSaved={close} />}
    </Modal>
  )
}
