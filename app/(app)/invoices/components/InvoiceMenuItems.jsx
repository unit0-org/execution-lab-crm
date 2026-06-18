import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'

const lead = (name) => <Icon name={name} size={16} />

// The invoice row's kebab items: the prior ops (download, delete) plus the
// new on-demand Drive upload.
export function InvoiceMenuItems({ on }) {
  return (
    <>
      <MenuRow leading={lead('file')} label="Download PDF"
        onClick={on.download} />
      <MenuRow leading={lead('upload')} label="Upload to Drive"
        onClick={on.startUpload} />
      <MenuRow leading={lead('trash')} label="Delete"
        onClick={on.askDelete} />
    </>
  )
}
