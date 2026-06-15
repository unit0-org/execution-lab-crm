'use client'

import { TextButton } from '@/ui/atoms/TextButton'
import { useCopyPayLink } from '../hooks/useCopyPayLink'

// One operation in the registrant menu: copy the payment link to share.
export function CopyPayLinkMenuItem({ registrationId, onDone }) {
  const copyLink = useCopyPayLink(registrationId)

  const copy = () => {
    onDone()
    copyLink()
  }

  return (
    <TextButton type="button" onClick={copy}>Copy payment link</TextButton>
  )
}
