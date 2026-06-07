import { Stack } from '@/ui/layout/Stack'
import { LabelOption } from './LabelOption'

export function LabelOptionList({ options, stateOf, onToggle }) {
  return (
    <Stack gap="xs">
      {options.map((o) => (
        <LabelOption key={o.id} option={o} state={stateOf(o.id)}
          onToggle={onToggle} />
      ))}
    </Stack>
  )
}
