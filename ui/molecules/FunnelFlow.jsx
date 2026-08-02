import { Fragment } from 'react'
import { FunnelStage } from './FunnelStage'
import { FunnelStep } from './FunnelStep'
import { flowStyle } from './FunnelFlow.styles'

function Step({ percent }) {
  if (percent === undefined) return null

  return <FunnelStep percent={percent} />
}

/**
 * Conversion funnel: tinted stages left to right, each pair joined by an
 * arrow carrying the share that made it from one stage to the next. Stacks
 * on narrow screens. `stages` = `[{ label, value, caption, tone, href }]`
 * — an `href` makes that stage a link into the people it counts;
 * `steps` = the percentage between each pair, so one fewer than `stages`.
 */
export function FunnelFlow({ stages, steps }) {
  return (
    <div style={flowStyle} data-funnel-flow>
      {stages.map((stage, index) => (
        <Fragment key={stage.label}>
          <Step percent={steps[index - 1]} />
          <FunnelStage label={stage.label} value={stage.value}
            caption={stage.caption} tone={stage.tone} href={stage.href} />
        </Fragment>
      ))}
    </div>
  )
}
