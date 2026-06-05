'use client'

import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { LinkedInSummary } from './LinkedInSummary'
import { EditLinkedInModal } from './EditLinkedInModal'
import { useReveal } from '../hooks/useReveal'

export function ContactLinkedIn({ contactId, url, onChanged }) {
  const edit = useReveal()

  return (
    <Inline gap="sm">
      <Text size="sm" tone="muted">LinkedIn</Text>
      <LinkedInSummary url={url} />
      <IconButton label="Edit LinkedIn" onClick={edit.show}>
        <Icon name="pencil" size={16} />
      </IconButton>
      <EditLinkedInModal contactId={contactId} url={url}
        open={edit.shown} onClose={edit.hide} onChanged={onChanged} />
    </Inline>
  )
}
