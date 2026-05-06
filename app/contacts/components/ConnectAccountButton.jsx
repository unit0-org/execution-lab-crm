import { LinkButton } from '@/ui/LinkButton'

export function ConnectAccountButton() {
  return (
    <LinkButton href="/api/google/connect" tone="primary" size="md">
      + Connect Google account
    </LinkButton>
  )
}
