'use client'

import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { EmailSummary } from './EmailSummary'
import { EditEmailsModal } from './EditEmailsModal'
import { useReveal } from '../hooks/useReveal'

export function ContactEmails({ contactId, emails, onChanged }) {
  const edit = useReveal()

  return (
    <Inline gap="sm">
      <Text size="sm" tone="muted">Emails</Text>
      <EmailSummary emails={emails} />
      <IconButton label="Edit emails" onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <EditEmailsModal contactId={contactId} emails={emails}
        open={edit.shown} onClose={edit.hide} onChanged={onChanged} />
    </Inline>
  )
}
