import { FormActions } from './FormActions'

const meta = {
  title: 'Molecules/FormActions',
  component: FormActions,
  // Full width, not centred: the whole point of the row is where it sits.
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {
  render: () => <FormActions onConfirm={() => {}} onCancel={() => {}} />
}

export const Busy = {
  render: () => (
    <FormActions label="Merge" busy onConfirm={() => {}} onCancel={() => {}} />
  )
}

export const Destructive = {
  render: () => (
    <FormActions label="Delete" tone="danger" onConfirm={() => {}}
      onCancel={() => {}} />
  )
}
