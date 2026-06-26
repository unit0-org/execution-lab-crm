'use client'

import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { MonoLabel } from '@/ui/atoms/MonoLabel'

// Builds the prompt from every field and copies it (a toast confirms).
export function CopyPromptBar({ onCopy }) {
  return (
    <Inline gap="md">
      <Button tone="primary" onClick={onCopy}>Copy prompt</Button>
      <MonoLabel tone="muted" size={12}>
        Assembles every field into a strategic-architect prompt.
      </MonoLabel>
    </Inline>
  )
}
