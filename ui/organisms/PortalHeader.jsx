import { BrandLockup } from '@/ui/molecules/BrandLockup'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { MonoLink } from '@/ui/atoms/MonoLink'
import { headerStyle, rightStyle } from './PortalHeader.styles'

// Portal masthead: brand lockup + cohort meta and program link. All copy
// is passed in; styling stays in the styles file.
export function PortalHeader({
  kicker, title, infoLabel, linkLabel, linkHref, logoSrc, logoAlt
}) {
  return (
    <header style={headerStyle}>
      <BrandLockup kicker={kicker} title={title} logoSrc={logoSrc}
        logoAlt={logoAlt} />
      <div style={rightStyle}>
        <MonoLabel size={11}>{infoLabel}</MonoLabel>
        <MonoLink href={linkHref} underline>{linkLabel}</MonoLink>
      </div>
    </header>
  )
}
