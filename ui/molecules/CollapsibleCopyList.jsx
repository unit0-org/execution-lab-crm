'use client'

import { CopyText } from './CopyText'
import { useToggle } from './useToggle'
import { ToggleMore } from './ToggleMore'
import * as s from './CopyList.styles'

// First value + a "+N more" toggle; expands to a truncated stack.
export function CollapsibleCopyList({ values }) {
  const more = useToggle()
  const lines = values.map((v) => (
    <CopyText key={v} value={v} truncate>{v}</CopyText>
  ))

  if (more.open) {
    return (
      <div style={s.stackStyle}>
        {lines}
        <ToggleMore label="Show less" onClick={more.hide} />
      </div>
    )
  }

  return (
    <div style={s.lineStyle}>
      {lines[0]}
      <ToggleMore label={`+${values.length - 1} more`} onClick={more.show} />
    </div>
  )
}
