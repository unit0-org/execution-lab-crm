'use client'

import { copyTextStyle, truncateStyle } from './CopyText.styles'
import { useClipboard } from './useClipboard'

const styleFor = (truncate) =>
  truncate ? { ...copyTextStyle, ...truncateStyle } : copyTextStyle

// Text that copies its value to the clipboard when clicked.
export function CopyText({ value, truncate, children }) {
  const copy = useClipboard()

  return (
    <button type="button" style={styleFor(truncate)} title="Click to copy"
      onClick={() => copy(value)}>
      {children}
    </button>
  )
}
