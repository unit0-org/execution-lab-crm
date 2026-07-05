import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { registrationWindowLine } from './registrationWindowLine'

// A quiet line stating a cohort's registration window; renders nothing for
// a cohort with no scheduled dates yet.
export function RegistrationWindow({ card, size = 11 }) {
  const line = registrationWindowLine(card)

  if (!line) return null

  return <MonoLabel size={size}>{line}</MonoLabel>
}
