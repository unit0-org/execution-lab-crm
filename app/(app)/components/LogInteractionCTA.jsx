import { LinkButton } from '@/ui/LinkButton'

// In Phase 7 this becomes a Ctrl+K modal trigger; for now it's a
// hard link to /log so the existing flow stays intact.
export function LogInteractionCTA() {
  return (
    <LinkButton href="/log" tone="primary" size="sm">
      + Log interaction
    </LinkButton>
  )
}
