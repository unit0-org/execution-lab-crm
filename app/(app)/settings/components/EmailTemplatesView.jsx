'use client'

import { Text } from '@/ui/atoms/Text'
import { useEmailTemplates } from '../hooks/useEmailTemplates'
import { EmailTemplatesPanel } from './EmailTemplatesPanel'

export function EmailTemplatesView() {
  const { templates, reload } = useEmailTemplates()

  if (templates === undefined) return <Text>Loading…</Text>

  if (templates.length === 0) return <Text>No templates yet.</Text>

  return <EmailTemplatesPanel templates={templates} onSaved={reload} />
}
