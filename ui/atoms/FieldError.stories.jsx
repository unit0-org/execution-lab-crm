import { FieldError } from './FieldError'

const meta = {
  title: 'Atoms/FieldError',
  component: FieldError
}

export default meta

export const Default = { args: { message: 'Enter a valid email.' } }

// Renders nothing at all when there is no message.
export const NoMessage = { args: { message: '' } }
