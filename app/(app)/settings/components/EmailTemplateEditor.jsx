'use client'

import { Form } from '@/ui/molecules/Form'
import { Columns } from '@/ui/layout/Columns'
import { useTemplateDraft } from '../hooks/useTemplateDraft'
import { useEmailTemplateForm } from '../hooks/useEmailTemplateForm'
import { EmailTemplateFields } from './EmailTemplateFields'
import { TemplateAside } from './TemplateAside'

export function EmailTemplateEditor({ template, onSaved }) {
  const { body, onChange } = useTemplateDraft(template)
  const key = template.template_key
  const { action, error } = useEmailTemplateForm(key, onSaved)

  return (
    <Form action={action}>
      <Columns>
        <EmailTemplateFields
          template={template}
          body={body}
          onBody={onChange}
          error={error}
        />
        <TemplateAside body={body} templateKey={key} />
      </Columns>
    </Form>
  )
}
