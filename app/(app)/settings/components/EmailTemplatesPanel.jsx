'use client'

import { Stack } from '@/ui/layout/Stack'
import { Select } from '@/ui/atoms/Select'
import { useTemplateSelection } from '../hooks/useTemplateSelection'
import { EmailTemplateEditor } from './EmailTemplateEditor'

export function EmailTemplatesPanel({ templates, onSaved }) {
  const { selectedKey, onSelect, options, selected } =
    useTemplateSelection(templates)

  return (
    <Stack gap="md">
      <Select
        label="Template"
        options={options}
        value={selectedKey}
        onChange={onSelect}
      />
      <EmailTemplateEditor
        key={selectedKey}
        template={selected}
        onSaved={onSaved}
      />
    </Stack>
  )
}
