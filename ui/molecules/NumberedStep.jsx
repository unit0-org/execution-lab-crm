import { Text } from '@/ui/atoms/Text'
import { rowStyle, numStyle, titleStyle } from './NumberedStep.styles'

/** Circled index + title + description (waitlist explainer). */
export function NumberedStep({ n, title, desc }) {
  return (
    <div style={rowStyle}>
      <span style={numStyle}>{n}</span>
      <div>
        <div style={titleStyle}>{title}</div>
        <Text tone="muted" size="sm">{desc}</Text>
      </div>
    </div>
  )
}
