import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { LeverSlot } from './LeverSlot'
import { toPairs } from '../toPairs'
import levers from '../data/offerLevers.json'

// The levers in two-column rows (one column on narrow screens). Odd rows
// keep a lone lever at half width via an empty spacer slot.
export function LeverGrid({ values, onField }) {
  return (
    <Stack gap="lg">
      {toPairs(levers).map((pair) => (
        <Columns key={pair[0].id}>
          {[0, 1].map((i) => (
            <LeverSlot key={i} lever={pair[i]} values={values}
              onField={onField} />
          ))}
        </Columns>
      ))}
    </Stack>
  )
}
