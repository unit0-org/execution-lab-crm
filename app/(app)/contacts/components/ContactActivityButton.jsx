import { Button } from '@/ui/atoms/Button'
import { Inline } from '@/ui/layout/Inline'
import { Icon } from '@/ui/atoms/Icon'

// A labelled "add" button for the contact action bar.
export function ContactActivityButton({ label, onClick }) {
  return (
    <Button size="sm" onClick={onClick}>
      <Inline gap="sm" nowrap>
        <Icon name="plus" size={15} />{label}
      </Inline>
    </Button>
  )
}
