import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { LabelDot } from '@/ui/atoms/LabelDot'

// One row in the label menu: a tri-state checkbox, color dot, and name.
export function LabelOption({ option, state, onToggle }) {
  const flip = () => onToggle(option.id)

  return (
    <Inline gap="sm" nowrap>
      <Checkbox checked={state === 'on'} indeterminate={state === 'mixed'}
        onChange={flip} label={option.name} />
      <LabelDot color={option.color} />
      <span>{option.name}</span>
    </Inline>
  )
}
