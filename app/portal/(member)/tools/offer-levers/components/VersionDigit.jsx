import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { Text } from '@/ui/atoms/Text'
import { digitStyle } from './OfferVersion.styles'

// One version part (major or minor): the number with an up chevron above
// and a down chevron below to bump it.
export function VersionDigit({ label, value, onUp, onDown }) {
  return (
    <div style={digitStyle}>
      <IconButton label={'Increase ' + label} onClick={onUp}>
        <Icon name="chevronUp" size={14} />
      </IconButton>
      <Text size="sm">{value}</Text>
      <IconButton label={'Decrease ' + label} onClick={onDown}>
        <Icon name="chevron" size={14} />
      </IconButton>
    </div>
  )
}
