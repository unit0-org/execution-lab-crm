import { BrandLockup } from '@/ui/molecules/BrandLockup'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { headerStyle, rightStyle } from './PortalHeader.styles'

// Portal masthead: brand lockup + cohort meta and program link. `aside`
// renders an extra node (e.g. a member sign-in link) in the right column.
export function PortalHeader({
  kicker, title, infoLabel, linkLabel, linkHref, logoSrc, logoAlt, aside
}) {
  return (
    <header style={headerStyle}>
      <BrandLockup kicker={kicker} title={title} logoSrc={logoSrc}
        logoAlt={logoAlt} />
      <div style={rightStyle}>
        {aside}
        <MonoLabel size={11}>{infoLabel}</MonoLabel>
        <MonoLink href={linkHref} underline>{linkLabel}</MonoLink>
      </div>
    </header>
  )
}
