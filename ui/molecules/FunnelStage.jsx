import NextLink from 'next/link'
import { FunnelStageBody } from './FunnelStageBody'
import { stageStyle } from './FunnelFlow.styles'
import { statLinkStyle } from './Stat.styles'

// A flex wrapper owning only the sizing, around the stage surface. With
// an `href` the whole stage becomes one link into the people it counts,
// lifting on hover the same way a linked Stat does.
export function FunnelStage({ label, value, caption, tone, href }) {
  const body =
    <FunnelStageBody label={label} value={value} caption={caption}
      tone={tone} />

  if (!href) return <div style={stageStyle}>{body}</div>

  return (
    <div style={stageStyle}>
      <NextLink href={href} style={statLinkStyle} data-card-lift>
        {body}
      </NextLink>
    </div>
  )
}
