import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { ctaTone } from './ctaTone'

// The tone-matched link for a cohort action. Cards pass outline to render
// the quieter, outlined twin so the hero's solid button stays primary.
export function CtaButton({ action, outline, ...rest }) {
  return (
    <ButtonLink href={action.href} tone={ctaTone(action.state, outline)}
      {...rest}>{action.cta}</ButtonLink>
  )
}
