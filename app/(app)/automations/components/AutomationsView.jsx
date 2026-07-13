'use client'

import { useRouter } from 'next/navigation'
import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { AutomationList } from './AutomationList'
import { AutomationModal } from './AutomationModal'

export function AutomationsView({ automations, templates, categories }) {
  const router = useRouter()
  const modal = useToggle()
  const reload = () => router.refresh()
  const onCreated = () => { reload(); modal.hide() }

  return (
    <Stack gap="md">
      <SectionHeader title="Actions" addLabel="New automation"
        onAdd={modal.show} />
      <AutomationList automations={automations} onChanged={reload} />
      <AutomationModal open={modal.open} onClose={modal.hide}
        templates={templates} categories={categories} onCreated={onCreated} />
    </Stack>
  )
}
