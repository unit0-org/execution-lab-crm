'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { AutomationForm } from './AutomationForm'

export function AutomationModal(props) {
  const { open, onClose, templates, categories, onCreated } = props

  return (
    <TitledModal open={open} title="New automation" onClose={onClose}>
      <AutomationForm templates={templates} categories={categories}
        onCreated={onCreated} />
    </TitledModal>
  )
}
