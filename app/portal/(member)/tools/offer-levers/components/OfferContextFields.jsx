import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { SingleFields } from './SingleFields'
import { RepeatableFields } from './RepeatableFields'
import { AddMore } from './AddMore'

export function OfferContextFields({ values, lists, saved, on }) {
  return (
    <Stack gap="md">
      <Text size="sm" tone="muted" gutter="none">
        What you’re selling, to whom, and what you want from it.
      </Text>
      <SingleFields values={values} saved={saved} onField={on.field} />
      <RepeatableFields lists={lists} saved={saved}
        onUpdate={on.update} onRemove={on.remove} />
      <AddMore onAdd={on.add} />
    </Stack>
  )
}
