import { HeatDots } from './HeatDots'
import { Stack } from '../layout/Stack'

const RATINGS = [0, 1, 2, 3, 4, 5]

const meta = {
  title: 'Atoms/HeatDots',
  component: HeatDots,
  args: { rating: 3 }
}

export default meta

export const Default = {}

export const Scale = {
  render: () => (
    <Stack gap="sm">
      {RATINGS.map((rating) => (
        <HeatDots key={rating} rating={rating} />
      ))}
    </Stack>
  )
}
