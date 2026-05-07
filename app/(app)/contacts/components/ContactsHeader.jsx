import { PageHeader } from '@/ui/PageHeader'
import { Heading } from '@/ui/Heading'
import { LabelFilter } from './LabelFilter'

export function ContactsHeader({ activeTag }) {
  return (
    <PageHeader
      title={<Heading gutter="none">All people</Heading>}
      actions={<LabelFilter activeTag={activeTag} />}
    />
  )
}
