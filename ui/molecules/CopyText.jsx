'use client'

import { copyTextStyle } from './CopyText.styles'
import { useClipboard } from './useClipboard'

// Text that copies its value to the clipboard when clicked.
export function CopyText({ value, children }) {
  const copy = useClipboard()

  return (
    <button type="button" style={copyTextStyle} title="Click to copy"
      onClick={() => copy(value)}>
      {children}
    </button>
  )
}
