import { Display } from './Display'
import { Stack } from '../layout/Stack'

const SIZES = ['sm', 'md', 'lg', 'xl']

const meta = {
  title: 'Atoms/Display',
  component: Display,
  args: { children: 'Execution Lab' }
}

export default meta

export const Default = {}

export const Sizes = {
  render: () => (
    <Stack>
      {SIZES.map((size) => (
        <Display key={size} size={size}>{size}</Display>
      ))}
    </Stack>
  )
}
