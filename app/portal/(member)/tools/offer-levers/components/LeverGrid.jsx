import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { LeverField } from './LeverField'
import { toPairs } from '../toPairs'
import levers from '../data/offerLevers.json'

// The levers in two-column rows (one column on narrow screens).
export function LeverGrid({ values, onField }) {
  return (
    <Stack gap="md">
      {toPairs(levers).map((pair) => (
        <Columns key={pair[0].id}>
          {pair.map((lever) => (
            <LeverField key={lever.id} lever={lever}
              value={values[lever.id]} onChange={onField(lever.id)} />
          ))}
        </Columns>
      ))}
    </Stack>
  )
}
