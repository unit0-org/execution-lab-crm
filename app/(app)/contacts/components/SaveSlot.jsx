import { SubmitButton } from '@/ui/atoms/SubmitButton'

export function SaveSlot({ dirty }) {
  if (!dirty) return null

  return <SubmitButton size="sm" tone="primary">Save</SubmitButton>
}
