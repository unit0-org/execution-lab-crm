import { Select } from '@/ui/atoms/Select'
import { templateOptions } from './toOptions'

// Template picker for the "send an email" action.
export function TemplatePicker({ form, templates }) {
  if (form.action !== 'send_email') return null

  return (
    <Select label="Template" name="templateKey"
      options={templateOptions(templates)} />
  )
}
