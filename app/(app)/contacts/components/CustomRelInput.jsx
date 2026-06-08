import { TextField } from '@/ui/atoms/TextField'

// The free-text relationship input, shown only when "Other…" is picked.
export function CustomRelInput({ show, value, onChange }) {
  if (!show) return null

  return (
    <TextField value={value} onChange={onChange}
      placeholder="Custom relationship" autoFocus />
  )
}
