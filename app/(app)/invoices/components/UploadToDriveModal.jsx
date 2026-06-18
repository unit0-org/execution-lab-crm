'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { UploadResult } from './UploadResult'

export function UploadToDriveModal({ invoice, flow }) {
  return (
    <TitledModal open={flow.open} onClose={flow.close}
      title={`Upload ${invoice.number} to Drive`}>
      <UploadResult running={flow.running} result={flow.result} />
    </TitledModal>
  )
}
