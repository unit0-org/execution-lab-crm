import { FormActions } from './FormActions'

const meta = {
  title: 'Molecules/FormActions',
  component: FormActions,
  // Full width, not centred: the whole point of the row is where it sits.
  parameters: { layout: 'padded' }
}
const noop = () => {}
const row = (props) => ({
  render: () => <FormActions onConfirm={noop} onCancel={noop} {...props} />
})
const sendMenu = [
  { label: 'Send this one', hint: 'Only the invoice you are looking at',
    onClick: noop },
  { label: 'Send all 8', hint: 'Every invoice in this batch', onClick: noop }
]
export default meta
export const Default = row({})
export const Busy = row({ label: 'Merge', busy: true })
export const Destructive = row({ label: 'Delete', tone: 'danger' })

// The primary carrying its variants. Both halves of the split button have to
// stand exactly as tall as the Cancel beside them.
export const WithMenu = row({ label: 'Send', menu: sendMenu })

// Opened near the foot of the window, where there is no room to hang the menu
// downwards: it flips above the trigger instead of running off-screen.
export const MenuNearWindowFoot = {
  render: () => (
    <div style={{ paddingTop: 'calc(100vh - 90px)' }}>
      {row({ label: 'Send', menu: sendMenu }).render()}
    </div>
  )
}
