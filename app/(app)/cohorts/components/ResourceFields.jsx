import { Stack } from '@/ui/layout/Stack'
import { Select } from '@/ui/atoms/Select'
import { TextField } from '@/ui/atoms/TextField'
import { RESOURCE_KINDS } from '@/lib/cohort/resourceKinds'

const KIND_OPTIONS = RESOURCE_KINDS.map((k) =>
  ({ value: k.kind, label: k.formLabel }))

export function ResourceFields() {
  return (
    <Stack gap="sm">
      <Select label="Type" name="kind" options={KIND_OPTIONS} required />
      <TextField label="Title" name="title" required />
      <TextField label="Link" name="url" type="url" required
        placeholder="https://…" />
    </Stack>
  )
}
