import { dl } from '@/app/_styles/page'
import { SupabaseStatus } from './SupabaseStatus'
import { UserRow } from './UserRow'

const Term = ({ children }) => <dt style={{ color: '#666' }}>{children}</dt>
const Def = ({ children }) => <dd style={{ margin: 0 }}>{children}</dd>

export function StatusList({ env, version, supabaseStatus, user }) {
  return (
    <dl style={dl}>
      <Term>Environment</Term><Def><code>{env}</code></Def>
      <Term>Version</Term><Def><code>{version}</code></Def>
      <Term>Supabase</Term><Def><SupabaseStatus status={supabaseStatus} /></Def>
      <Term>Signed in</Term><Def><UserRow user={user} /></Def>
    </dl>
  )
}
