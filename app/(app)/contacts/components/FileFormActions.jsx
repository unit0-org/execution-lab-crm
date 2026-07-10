import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'

export function FileFormActions({ busy, ready, onUpload, onCancel }) {
  return (
    <Inline gap="sm">
      <Button tone="primary" size="sm" loading={busy} disabled={!ready}
        onClick={onUpload}>Upload</Button>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}
