'use client'

import { EndRow } from '@/ui/layout/EndRow'
import { Icon } from '@/ui/atoms/Icon'
import { SubmitButton } from '@/ui/atoms/SubmitButton'

// The composer's send button: an accent arrow, right-aligned like Figma's
// comment box. Disabled until there's text, so the click is never dead.
export function NoteSendButton({ disabled }) {
  return (
    <EndRow>
      <SubmitButton tone="primary" size="sm" icon disabled={disabled}>
        <Icon name="arrowUp" size={16} />
      </SubmitButton>
    </EndRow>
  )
}
