import { Button } from '@/ui/atoms/Button'
import { Inline } from '@/ui/layout/Inline'
import { Icon } from '@/ui/atoms/Icon'

// Opens the label filter; shows how many labels are currently applied.
export function LabelFilterTrigger({ count, onClick }) {
  const label = count > 0 ? `Labels · ${count}` : 'Labels'

  return (
    <Button size="sm" onClick={onClick}>
      <Inline gap="sm" nowrap><Icon name="tag" size={15} />{label}</Inline>
    </Button>
  )
}
