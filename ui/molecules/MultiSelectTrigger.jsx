import { triggerStyle, valueStyle, chevronStyle } from './MultiSelect.styles'
import { Icon } from '../atoms/Icon'
import { selectedLabel } from './selectedLabel'

export function MultiSelectTrigger(props) {
  const { options, selected, placeholder, onClick } = props
  const label = selectedLabel(options, selected, placeholder)

  return (
    <button type="button" onClick={onClick} style={triggerStyle}>
      <span style={valueStyle}>{label}</span>
      <span style={chevronStyle}><Icon name="chevron" size={16} /></span>
    </button>
  )
}
