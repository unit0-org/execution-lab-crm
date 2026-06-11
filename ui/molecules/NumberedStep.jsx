import { Text } from '@/ui/atoms/Text'
import { rowStyle, numStyle, titleStyle } from './NumberedStep.styles'

// A numbered step: a circled index + a title and description.
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
