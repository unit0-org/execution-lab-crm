import { pillStyle } from './MentionField.styles'

// One run of note text: a mention shows as a pill, the rest as plain text.
export function MentionSegment({ seg }) {
  if (!seg.mention) return seg.text

  return <span style={pillStyle}>{seg.text}</span>
}
