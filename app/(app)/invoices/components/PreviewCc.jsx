import { MonoLabel } from '@/ui/atoms/MonoLabel'

export function PreviewCc({ cc }) {
  if (!cc) return null

  return <MonoLabel>Cc {cc}</MonoLabel>
}
