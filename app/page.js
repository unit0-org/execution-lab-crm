import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import packageJson from '../package.json'

export const dynamic = 'force-dynamic'

async function checkSupabase(supabase) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    return { ok: false, detail: 'Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY' }
  }

  try {
    const { error } = await supabase
      .from('contacts')
      .select('id', { count: 'exact', head: true })

    if (error) return { ok: false, detail: error.message }
    return { ok: true, detail: `Connected to ${new URL(url).host}` }
  } catch (err) {
    return { ok: false, detail: err.message }
  }
}

export default async function Home() {
  const supabase = await createClient()
  const supabaseStatus = await checkSupabase(supabase)
  const { data: { user } } = await supabase.auth.getUser()

  const env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'unknown'
  const version = packageJson.version

  return (
    <main style={{
      fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
      maxWidth: 640,
      margin: '4rem auto',
      padding: '0 1.5rem',
      lineHeight: 1.5,
      color: '#111',
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Execution Lab CRM — baseline OK
      </h1>

      <dl style={{ display: 'grid', gridTemplateColumns: 'max-content 1fr', columnGap: '1.5rem', rowGap: '0.75rem' }}>
        <dt style={{ color: '#666' }}>Environment</dt>
        <dd style={{ margin: 0 }}><code>{env}</code></dd>

        <dt style={{ color: '#666' }}>Version</dt>
        <dd style={{ margin: 0 }}><code>{version}</code></dd>

        <dt style={{ color: '#666' }}>Supabase</dt>
        <dd style={{ margin: 0 }}>
          <span style={{
            display: 'inline-block',
            padding: '0.125rem 0.5rem',
            borderRadius: 4,
            fontSize: '0.875rem',
            background: supabaseStatus.ok ? '#dcfce7' : '#fee2e2',
            color: supabaseStatus.ok ? '#166534' : '#991b1b',
          }}>
            {supabaseStatus.ok ? 'connected' : 'unreachable'}
          </span>
          <div style={{ fontSize: '0.875rem', color: '#666', marginTop: '0.25rem' }}>
            {supabaseStatus.detail}
          </div>
        </dd>

        <dt style={{ color: '#666' }}>Signed in</dt>
        <dd style={{ margin: 0 }}>
          {user ? (
            <>
              <code>{user.email}</code>
              {' · '}
              <form action="/auth/signout" method="post" style={{ display: 'inline' }}>
                <button type="submit" style={linkButton}>sign out</button>
              </form>
            </>
          ) : (
            <Link href="/login" style={{ color: '#111' }}>sign in</Link>
          )}
        </dd>
      </dl>

      <p style={{ marginTop: '2rem' }}>
        <Link href="/contacts" style={{ color: '#111' }}>→ Contacts</Link>
      </p>
    </main>
  )
}

const linkButton = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#111',
  textDecoration: 'underline',
  font: 'inherit',
  padding: 0,
}
