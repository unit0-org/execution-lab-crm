'use client'

import { Button } from '@/ui/atoms/Button'
import { Icon } from '@/ui/atoms/Icon'

// The "Add" button that opens the contact quick-add menu.
export function AddMenuTrigger({ onClick }) {
  return (
    <Button size="sm" onClick={onClick}>
      Add <Icon name="chevron" size={14} />
    </Button>
  )
}
