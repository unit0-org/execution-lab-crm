import { mirrorStyle } from './MentionField.styles'
import { mentionSegments } from './mentionSegments'
import { MentionSegment } from './MentionSegment'

// Mirrors the textarea text behind it so picked @-mentions show as pills.
export function MentionHighlight({ value, labels, scrollRef }) {
  const segments = mentionSegments(value, labels)

  return (
    <div ref={scrollRef} style={mirrorStyle} aria-hidden="true">
      {segments.map((seg, i) => (
        <MentionSegment key={i} seg={seg} />
      ))}
    </div>
  )
}
