import { EndRow } from '@/ui/layout/EndRow'
import { Button } from '@/ui/atoms/Button'

export function FileFormActions({ busy, ready, onUpload, onCancel }) {
  return (
    <EndRow>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
      <Button tone="primary" size="sm" loading={busy} disabled={!ready}
        onClick={onUpload}>Upload</Button>
    </EndRow>
  )
}
