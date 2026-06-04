import { Inline } from '../layout/Inline'
import { Checkbox } from '../atoms/Checkbox'

export function MultiSelectOption({ option, checked, onToggle }) {
  const flip = () => onToggle(option.value)

  return (
    <Inline gap="sm">
      <Checkbox checked={checked} onChange={flip} label={option.label} />
      <span>{option.label}</span>
    </Inline>
  )
}
