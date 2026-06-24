'use client'

import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { useCopyPayLink } from '../hooks/useCopyPayLink'

// One operation in the registrant menu: copy the payment link to share.
export function CopyPayLinkMenuItem({ registrationId, onDone }) {
  const copyLink = useCopyPayLink(registrationId)

  const copy = () => {
    onDone()
    copyLink()
  }

  return (
    <MenuRow leading={<Icon name="copy" size={16} />}
      label="Copy payment link" onClick={copy} />
  )
}
