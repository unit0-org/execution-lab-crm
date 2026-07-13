import { SubmitButton } from './SubmitButton'

// Reflects its form's pending state via useFormStatus, so it only makes
// sense inside a <form>.
const meta = {
  title: 'Atoms/SubmitButton',
  component: SubmitButton,
  args: { tone: 'primary', children: 'Save contact' }
}

export default meta

export const Default = {
  render: (args) => (
    <form>
      <SubmitButton {...args} />
    </form>
  )
}

export const Disabled = {
  args: { disabled: true },
  render: (args) => (
    <form>
      <SubmitButton {...args} />
    </form>
  )
}
