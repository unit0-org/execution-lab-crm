import { MonoLabel } from '@/ui/atoms/MonoLabel'

const label = (n) => `${n} ${n === 1 ? 'contact' : 'contacts'}`

// Count of the contacts currently shown (after label + search filters),
// as a quiet mono caption beside the controls.
export function ContactsCount({ count }) {
  return <MonoLabel tone="muted" size={11} caps>{label(count)}</MonoLabel>
}
