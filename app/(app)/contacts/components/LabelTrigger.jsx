import { Button } from '@/ui/atoms/Button'
import { Inline } from '@/ui/layout/Inline'
import { Icon } from '@/ui/atoms/Icon'

// The button that opens the label menu, Gmail "Label as" style.
export function LabelTrigger({ label = 'Label', onClick }) {
  return (
    <Button size="sm" onClick={onClick}>
      <Inline gap="sm" nowrap>
        <Icon name="tag" size={15} />{label}
      </Inline>
    </Button>
  )
}
