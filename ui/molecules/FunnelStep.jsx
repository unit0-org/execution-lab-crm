import { Icon } from '../atoms/Icon'
import { stepStyle, stepValue } from './FunnelStep.styles'

export function FunnelStep({ percent }) {
  return (
    <div style={stepStyle} data-funnel-step aria-hidden="true">
      <Icon name="chevronRight" size={18} />
      <span style={stepValue}>{percent}%</span>
    </div>
  )
}
