import { Select } from '@/ui/atoms/Select'
import { ACTIONS } from '@/lib/automation/catalog/actions'
import { catalogOptions } from './toOptions'
import { TemplatePicker } from './TemplatePicker'
import { TaskFields } from './TaskFields'

export function ActionFields({ form, templates }) {
  return (
    <>
      <Select label="Then" name="actionType" defaultValue={form.action}
        onChange={form.onAction} options={catalogOptions(ACTIONS)} />
      <TemplatePicker form={form} templates={templates} />
      <TaskFields form={form} />
    </>
  )
}
