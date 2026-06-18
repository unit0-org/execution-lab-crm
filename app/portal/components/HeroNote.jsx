import { MonoLabel } from '@/ui/atoms/MonoLabel'

// Fine print under the hero CTA; absent when there is no note (sold out).
export function HeroNote({ note }) {
  if (!note) return null

  return (
    <MonoLabel tone="subtle" size={10} align="center">{note}</MonoLabel>
  )
}
