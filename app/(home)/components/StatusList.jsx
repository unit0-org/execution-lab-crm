import { DefinitionList } from '@/ui/DefinitionList'
import { DefinitionRow } from '@/ui/DefinitionRow'
import { Code } from '@/ui/Code'
import { SupabaseStatusRow } from './SupabaseStatusRow'
import { SignedInUser } from './SignedInUser'

export function StatusList({ env, version, user }) {
  return (
    <DefinitionList>
      <DefinitionRow term="Environment"><Code>{env}</Code></DefinitionRow>
      <DefinitionRow term="Version"><Code>{version}</Code></DefinitionRow>
      <DefinitionRow term="Supabase"><SupabaseStatusRow /></DefinitionRow>
      <DefinitionRow term="Signed in"><SignedInUser user={user} /></DefinitionRow>
    </DefinitionList>
  )
}
