import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { RepeatableInput } from './RepeatableInput'

// One repeatable type: its label over each added input. Renders nothing
// until the type has at least one input.
export function RepeatableInputs({ field, items, saved, onUpdate, onRemove }) {
  if (!items?.length) return null

  return (
    <Stack gap="sm">
      <Text size="sm" tone="muted" gutter="none">{field.label}</Text>
      {items.map((item) => (
        <RepeatableInput key={item.id} field={field} item={item}
          saved={saved[item.id]} onUpdate={onUpdate(field.inputType, item.id)}
          onRemove={onRemove(field.inputType, item.id)} />
      ))}
    </Stack>
  )
}
