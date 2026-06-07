'use client'

import { useParams } from 'next/navigation'
import { Text } from '@/ui/atoms/Text'
import { useEditorInitial } from '../hooks/useEditorInitial'
import { InvoiceEditor } from './InvoiceEditor'

export function InvoiceEditorView({ mode }) {
  const { id } = useParams()
  const initial = useEditorInitial(mode, id)

  if (initial === undefined) return <Text>Loading…</Text>

  if (initial === null) return <Text>Invoice not found.</Text>

  return <InvoiceEditor mode={mode} initial={initial} />
}
