import { Spinner } from './Spinner'
import { Inline } from '../layout/Inline'

const meta = {
  title: 'Atoms/Spinner',
  component: Spinner
}

export default meta

export const Default = {}

export const Sizes = {
  render: () => (
    <Inline>
      <Spinner size={12} />
      <Spinner size={20} />
      <Spinner size={32} />
    </Inline>
  )
}
