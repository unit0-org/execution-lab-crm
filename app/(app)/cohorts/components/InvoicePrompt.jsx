'use client'

import { Modal } from '@/ui/organisms/Modal'
import { Stack } from '@/ui/layout/Stack'
import { Inline } from '@/ui/layout/Inline'
import { Heading } from '@/ui/atoms/Heading'
import { TextField } from '@/ui/atoms/TextField'
import { Button } from '@/ui/atoms/Button'
import { useInvoiceAmount } from '../hooks/useInvoiceAmount'

// After marking paid: optionally create and send an invoice. The amount
// defaults to the cohort's regular price; the operator can edit it.
export function InvoicePrompt({ open, cohortId, onSubmit, onSkip }) {
  const amt = useInvoiceAmount(cohortId, open)

  return (
    <Modal open={open} onClose={onSkip}>
      <Stack gap="md">
        <Heading level={3}>Create and send an invoice?</Heading>
        <TextField label="Amount (CAD)" value={amt.value}
          onChange={amt.set} />
        <Inline gap="sm">
          <Button tone="primary" size="sm"
            onClick={() => onSubmit(amt.value)}>Send invoice</Button>
          <Button size="sm" onClick={onSkip}>Skip</Button>
        </Inline>
      </Stack>
    </Modal>
  )
}
