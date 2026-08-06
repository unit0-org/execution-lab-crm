import { useState } from 'react'
import { Popover } from './Popover'
import { Modal } from '../organisms/Modal'
import { Button } from '../atoms/Button'

const meta = { title: 'Molecules/Popover', component: Popover }
const noop = () => {}

export default meta

// Opens on mount so each story shows the panel, not just its trigger.
function SendMenu() {
  const [open, setOpen] = useState(true)
  const trigger = <Button size="sm" onClick={() => setOpen(true)}>More</Button>

  return (
    <Popover open={open} onClose={() => setOpen(false)} trigger={trigger}
      align="end">
      <Button size="sm">Send all</Button>
    </Popover>
  )
}

export const Default = { render: () => <SendMenu /> }

// Regression guard: the dialog and the panel both portal to <body>, so a
// panel ranked below the dialog hid behind it — visible only as a sliver
// under the dialog's edge, dimmed by the backdrop, and unclickable.
export const InsideModal = {
  render: () => (
    <Modal open onClose={noop} wide><SendMenu /></Modal>
  )
}
