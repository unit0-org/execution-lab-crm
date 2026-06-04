'use client'

import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { PhoneSummary } from './PhoneSummary'
import { EditPhonesModal } from './EditPhonesModal'
import { useReveal } from '../hooks/useReveal'

export function ContactPhones({ contactId, phones, onChanged }) {
  const edit = useReveal()

  return (
    <Inline gap="sm">
      <Text size="sm" tone="muted">Phones</Text>
      <PhoneSummary phones={phones} />
      <IconButton label="Edit phones" onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <EditPhonesModal contactId={contactId} phones={phones}
        open={edit.shown} onClose={edit.hide} onChanged={onChanged} />
    </Inline>
  )
}
