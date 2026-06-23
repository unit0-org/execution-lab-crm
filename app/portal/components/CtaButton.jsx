import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { ctaTone } from './ctaTone'

// The tone-matched primary link for a cohort action.
export function CtaButton({ action, block, size }) {
  return (
    <ButtonLink href={action.href} tone={ctaTone(action.state)}
      block={block} size={size}>{action.cta}</ButtonLink>
  )
}
