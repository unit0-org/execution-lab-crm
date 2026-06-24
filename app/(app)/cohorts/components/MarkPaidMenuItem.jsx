'use client'

import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { InvoicePrompt } from './InvoicePrompt'
import { useMarkPaidFlow } from '../hooks/useMarkPaidFlow'

// Mark a registrant paid (confirm), then offer to invoice them.
export function MarkPaidMenuItem({ registrationId, cohortId, onDone }) {
  const flow = useMarkPaidFlow(registrationId, onDone)

  return (
    <>
      <MenuRow leading={<Icon name="check" size={16} />}
        label="Mark as paid" onClick={flow.ask} />
      <ConfirmDialog open={flow.step === 'confirm'} title="Mark as paid?"
        message="This marks the registrant as paid."
        confirmLabel="Mark as paid" tone="primary"
        onConfirm={flow.confirm} onCancel={flow.cancel} />
      <InvoicePrompt open={flow.step === 'invoice'} cohortId={cohortId}
        onSubmit={flow.invoice} onSkip={flow.skip} />
    </>
  )
}
