import { Stack } from '@/ui/layout/Stack'
import { LabelOptionList } from './LabelOptionList'
import { ManageLabelsButton } from './ManageLabelsButton'

// The filter dropdown body: the label checklist + a manage-labels link.
export function LabelFilterPanel({ options, stateOf, onToggle, onManage }) {
  return (
    <Stack gap="sm">
      <LabelOptionList options={options} stateOf={stateOf}
        onToggle={onToggle} />
      <ManageLabelsButton onClick={onManage} />
    </Stack>
  )
}
