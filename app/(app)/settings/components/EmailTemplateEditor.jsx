'use client'

import { Form } from '@/ui/molecules/Form'
import { Columns } from '@/ui/layout/Columns'
import { useTemplateDraft } from '../hooks/useTemplateDraft'
import { useEmailTemplateForm } from '../hooks/useEmailTemplateForm'
import { EmailTemplateFields } from './EmailTemplateFields'
import { TemplateAside } from './TemplateAside'

export function EmailTemplateEditor({ template, onSaved }) {
  const draft = useTemplateDraft(template)
  const key = template.template_key
  const { action, error } = useEmailTemplateForm(key, onSaved)

  return (
    <Form action={action}>
      <Columns>
        <EmailTemplateFields draft={draft} error={error} />
        <TemplateAside body={draft.body} templateKey={key} />
      </Columns>
    </Form>
  )
}
