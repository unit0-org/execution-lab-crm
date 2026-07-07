import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { partStyle } from './OfferVersionControl.styles'

// One version part (major or minor): the number flanked by a down chevron
// on the left and an up chevron on the right.
export function VersionDigit({ label, value, onDown, onUp }) {
  return (
    <span style={partStyle}>
      <IconButton label={'Decrease ' + label} onClick={onDown} size={28}>
        <Icon name="chevronLeft" size={16} />
      </IconButton>
      <MonoLabel tone="primary" size={14}>{value}</MonoLabel>
      <IconButton label={'Increase ' + label} onClick={onUp} size={28}>
        <Icon name="chevronRight" size={16} />
      </IconButton>
    </span>
  )
}
