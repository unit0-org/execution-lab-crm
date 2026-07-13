import { GrowRow } from '@/ui/layout/GrowRow'
import { RowDelete } from '@/ui/molecules/RowDelete'
import { RepeatableControl } from './RepeatableControl'

// One added input for a repeatable type: its control (text field or textarea)
// with a remove button. Its label sits above the group.
export function RepeatableInput(props) {
  const { field, item, saved, onUpdate, onRemove, onActive } = props

  return (
    <GrowRow align="start">
      <RepeatableControl field={field} item={item} saved={saved}
        onUpdate={onUpdate} onActive={onActive} />
      <RowDelete onConfirm={onRemove} title="Remove input" />
    </GrowRow>
  )
}
