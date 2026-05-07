'use client'

import { Select } from '@/ui/Select'
import { useLabels } from '../hooks/useLabels'
import { useLabelFilterNav } from '../hooks/useLabelFilterNav'
import { LabelFilterOption } from './LabelFilterOption'

export function LabelFilter({ activeTag = '' }) {
  const { labels } = useLabels()
  const onChange = useLabelFilterNav()

  return (
    <Select name="tag" value={activeTag} onChange={onChange}>
      <LabelFilterOption value="">All contacts</LabelFilterOption>
      {labels.map((l) => (
        <LabelFilterOption key={l.id} value={l.name}>{l.name}</LabelFilterOption>
      ))}
    </Select>
  )
}
