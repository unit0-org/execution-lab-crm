import Image from 'next/image'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import {
  lockupStyle, colStyle, titleStyle, logoStyle
} from './BrandLockup.styles'

/** Logo + product kicker + title, linking home (portal). */
export function BrandLockup({ kicker, title, logoSrc, logoAlt, href = '/' }) {
  return (
    <a href={href} style={lockupStyle} data-brand-lockup>
      <Image src={logoSrc} width={40} height={40} alt={logoAlt}
        style={logoStyle} />
      <span style={colStyle}>
        <MonoLabel tone="cool" size={10} caps>{kicker}</MonoLabel>
        <span style={titleStyle}>{title}</span>
      </span>
    </a>
  )
}
