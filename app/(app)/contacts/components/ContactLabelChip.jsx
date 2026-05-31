'use client'

import { Chip } from '@/ui/Chip'
import { Inline } from '@/ui/Inline'
import { InlineForm } from '@/ui/InlineForm'
import { SubmitIconButton } from '@/ui/SubmitIconButton'
import { removeContactLabel } from '../actions'

// Plain async form action so useFormStatus inside SubmitIconButton reflects
// the in-flight removal; the chip vanishing is the on-screen confirmation.
const remover = (after) => async (formData) => { await removeContactLabel(formData); after?.() }

export function ContactLabelChip({ contactId, label, onMutate }) {
  return (
    <Inline gap="sm">
      <Chip color={label.color}>{label.name}</Chip>
      <InlineForm action={remover(onMutate)}>
        <input type="hidden" name="contact_id" value={contactId} />
        <input type="hidden" name="label_id" value={label.id} />
        <SubmitIconButton label="Remove label">×</SubmitIconButton>
      </InlineForm>
    </Inline>
  )
}
