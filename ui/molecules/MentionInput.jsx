'use client'

import { areaStyle } from './MentionField.styles'
import { MentionHighlight } from './MentionHighlight'
import { useScrollMirror } from './useScrollMirror'

// The transparent textarea layered over its pill-rendering mirror.
export function MentionInput({ m, name, labels, rest }) {
  const scroll = useScrollMirror()

  return (
    <>
      <MentionHighlight value={m.value} labels={labels}
        scrollRef={scroll.mirror} />
      <textarea name={name} value={m.value} onChange={m.change}
        onKeyDown={m.keyDown} onScroll={scroll.onScroll}
        style={areaStyle} {...rest} />
    </>
  )
}
