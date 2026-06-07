import { Stack } from '@/ui/layout/Stack'
import { LabelSearch } from './LabelSearch'
import { LabelOptionList } from './LabelOptionList'
import { CreateLabelRow } from './CreateLabelRow'
import { ManageLabelsButton } from './ManageLabelsButton'

// The dropdown body: search, the label checklist, inline create, manage.
export function LabelMenuPanel({ menu, stateOf, onToggle, onManage }) {
  return (
    <Stack gap="sm">
      <LabelSearch value={menu.query} onChange={menu.setQuery} />
      <LabelOptionList options={menu.matches} stateOf={stateOf}
        onToggle={onToggle} />
      <CreateLabelRow show={menu.canCreate} name={menu.query}
        onCreate={menu.create} />
      <ManageLabelsButton onClick={onManage} />
    </Stack>
  )
}
