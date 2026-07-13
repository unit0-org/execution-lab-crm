'use client'

import { Icon } from '../atoms/Icon'
import { CollapsibleAdd } from './CollapsibleAdd'
import { CollapsiblePreview } from './CollapsiblePreview'
import { summaryStyle, rowStyle, titleStyle, actionsStyle, bodyStyle }
  from './Collapsible.styles'

/**
 * Expand/collapse section, on a native `<details>`. `title` heads the
 * clickable row; `preview` is an optional collapsed-only body (a summary of
 * what expanding reveals); `children` is the expanded body. `onAdd` puts the
 * section's `+` in that header, opening the create flow without toggling the
 * panel. Never hand-build a section's collapse or its add button — use this,
 * so every collapsible section behaves the same way.
 */
export function Collapsible({
  title, preview, defaultOpen = true, addLabel, onAdd, children
}) {
  const initial = defaultOpen ? { open: true } : {}

  return (
    <details {...initial} data-collapsible>
      <summary style={summaryStyle}>
        <div style={rowStyle}>
          <span style={titleStyle}>{title}</span>
          <span style={actionsStyle}>
            <CollapsibleAdd label={addLabel} onAdd={onAdd} />
            <Icon name="chevron" size={16} />
          </span>
        </div>
        <CollapsiblePreview preview={preview} />
      </summary>
      <div style={bodyStyle}>{children}</div>
    </details>
  )
}
