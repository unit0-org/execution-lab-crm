import { DefinitionRow } from '@/ui/DefinitionRow'

export function AboutRow({ term, value }) {
  if (!value) return null

  return <DefinitionRow term={term}>{value}</DefinitionRow>
}
