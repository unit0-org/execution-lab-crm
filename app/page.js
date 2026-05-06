import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { checkSupabase } from '@/lib/checks/supabase'
import { StatusList } from './_components/StatusList'
import { main } from './_styles/page'
import packageJson from '../package.json'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const supabase = await createClient()
  const supabaseStatus = await checkSupabase(supabase)
  const { data: { user } } = await supabase.auth.getUser()
  const env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown'

  return (
    <main style={main}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Execution Lab CRM — baseline OK
      </h1>
      <StatusList env={env} version={packageJson.version} supabaseStatus={supabaseStatus} user={user} />
      <p style={{ marginTop: '2rem' }}>
        <Link href="/contacts" style={{ color: '#111' }}>→ Contacts</Link>
      </p>
    </main>
  )
}
