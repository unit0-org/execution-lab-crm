'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { GearIcon } from '@/ui/atoms/GearIcon'
import { TitledModal } from '@/ui/organisms/TitledModal'
import { useToggle } from '@/ui/molecules/useToggle'
import { DigestForm } from './DigestForm'

// Gear by the heading; opens the weekly-digest settings in a modal.
export function DigestSettings({ setting }) {
  const modal = useToggle()

  return (
    <>
      <IconButton label="Digest settings" onClick={modal.show}>
        <GearIcon />
      </IconButton>
      <TitledModal open={modal.open} title="Digest" onClose={modal.hide}>
        <DigestForm setting={setting} />
      </TitledModal>
    </>
  )
}
