import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { RequiredMark } from '@/ui/atoms/RequiredMark'
import { labelRowStyle } from './Field.styles'

// Asterisk only on required fields; named to keep it out of the JSX.
function Mark({ on }) {
  if (!on) return null

  return <RequiredMark />
}

function Hint({ text }) {
  if (!text) return null

  return <MonoLabel tone="subtle" size={10}>{text}</MonoLabel>
}

// Mono uppercase field label with an optional required mark + hint.
export function FieldLabelRow({ label, required, hint }) {
  return (
    <span style={labelRowStyle}>
      <MonoLabel caps size={11}>{label} <Mark on={required} /></MonoLabel>
      <Hint text={hint} />
    </span>
  )
}
