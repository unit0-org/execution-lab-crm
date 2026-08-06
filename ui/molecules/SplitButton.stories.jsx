import { SplitButton } from './SplitButton'
import { Modal } from '../organisms/Modal'

const meta = { title: 'Molecules/SplitButton', component: SplitButton }
const noop = () => {}
const item = (label, hint) => ({ label, hint, onClick: noop })
const items = [
  item('Send this one', 'Only the invoice on screen'),
  item('Send all 8', 'Every invoice in this batch')
]

export default meta

function Send({ busy }) {
  return (
    <SplitButton label="Send" items={items} tone="primary" size="sm"
      busy={busy} onClick={noop} />
  )
}

export const Default = { render: () => <Send /> }

export const Busy = { render: () => <Send busy /> }

// The dialog it is used in: both the dialog and the menu portal to <body>,
// so the menu has to out-rank the dialog to be seen and clicked.
export const InsideModal = {
  render: () => <Modal open onClose={noop} wide><Send /></Modal>
}
