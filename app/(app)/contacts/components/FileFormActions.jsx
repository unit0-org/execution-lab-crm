import { FormActions } from '@/ui/molecules/FormActions'

export function FileFormActions({ busy, ready, onUpload, onCancel }) {
  return (
    <FormActions label="Upload" busy={busy} disabled={!ready}
      onCancel={onCancel} onConfirm={onUpload} />
  )
}
