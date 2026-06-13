'use client'

import { useRouter } from 'next/navigation'
import { Text } from '@/ui/atoms/Text'
import { EmailTemplatesPanel } from './EmailTemplatesPanel'

export function EmailTemplatesView({ templates }) {
  const router = useRouter()
  const reload = () => router.refresh()

  if (templates.length === 0) return <Text>No templates yet.</Text>

  return <EmailTemplatesPanel templates={templates} onSaved={reload} />
}
