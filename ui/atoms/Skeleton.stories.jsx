import { Skeleton } from './Skeleton'
import { Stack } from '../layout/Stack'

const meta = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: { layout: 'padded' }
}

export default meta

export const Default = {}

export const Tall = { args: { height: 64 } }

export const Lines = {
  render: () => (
    <Stack gap="sm">
      <Skeleton />
      <Skeleton />
      <Skeleton height={12} />
    </Stack>
  )
}
