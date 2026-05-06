import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { syncAccount, disconnectAccount } from './actions'

export const dynamic = 'force-dynamic'

export default async function ContactsPage({ searchParams }) {
  const params = await searchParams
  const errorMsg = params?.error
  const justConnected = params?.connected === '1'

  const supabase = await createClient()

  const { data: accounts = [] } = await supabase
    .from('google_accounts')
    .select('id, email, label, last_synced_at')
    .order('email')

  const { data: contacts = [] } = await supabase
    .from('contacts')
    .select(`
      id,
      display_name,
      created_at,
      google_account_id,
      contact_emails ( email, is_primary )
    `)
    .order('display_name', { ascending: true, nullsFirst: false })
    .limit(500)

  const accountById = Object.fromEntries((accounts || []).map((a) => [a.id, a]))

  return (
    <main style={page}>
      <header style={headerRow}>
        <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Contacts</h1>
        <nav style={{ display: 'flex', gap: '1rem', fontSize: '0.875rem' }}>
          <Link href="/" style={link}>Home</Link>
          <form action="/auth/signout" method="post" style={{ margin: 0 }}>
            <button type="submit" style={linkButton}>Sign out</button>
          </form>
        </nav>
      </header>

      {justConnected && (
        <p style={{ ...notice, background: '#dcfce7', color: '#166534' }}>
          Account connected. Click <strong>Sync</strong> to pull contacts.
        </p>
      )}
      {errorMsg && (
        <p style={{ ...notice, background: '#fee2e2', color: '#991b1b' }}>
          {errorMsg}
        </p>
      )}

      <section style={{ marginBottom: '2rem' }}>
        <div style={sectionHeader}>
          <h2 style={h2}>Connected Google accounts</h2>
          <a href="/api/google/connect" style={primaryBtn}>+ Connect Google account</a>
        </div>

        {accounts.length === 0 ? (
          <p style={muted}>No accounts connected yet.</p>
        ) : (
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Email</th>
                <th style={th}>Last synced</th>
                <th style={{ ...th, textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((a) => (
                <tr key={a.id}>
                  <td style={td}>{a.email}</td>
                  <td style={{ ...td, color: '#666' }}>
                    {a.last_synced_at
                      ? new Date(a.last_synced_at).toLocaleString()
                      : 'never'}
                  </td>
                  <td style={{ ...td, textAlign: 'right' }}>
                    <form action={syncAccount} style={inlineForm}>
                      <input type="hidden" name="account_id" value={a.id} />
                      <button type="submit" style={smallBtn}>Sync</button>
                    </form>
                    <form action={disconnectAccount} style={inlineForm}>
                      <input type="hidden" name="account_id" value={a.id} />
                      <button type="submit" style={dangerBtn}>Disconnect</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section>
        <div style={sectionHeader}>
          <h2 style={h2}>Contacts ({contacts.length})</h2>
        </div>

        {contacts.length === 0 ? (
          <p style={muted}>No contacts yet. Connect an account and click Sync.</p>
        ) : (
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Email</th>
                <th style={th}>Source account</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => {
                const primary =
                  c.contact_emails?.find((e) => e.is_primary)?.email ||
                  c.contact_emails?.[0]?.email ||
                  ''
                const acct = accountById[c.google_account_id]
                return (
                  <tr key={c.id}>
                    <td style={td}>{c.display_name || '—'}</td>
                    <td style={td}>{primary}</td>
                    <td style={{ ...td, color: '#666' }}>{acct?.email || '—'}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
}

// styles
const page = {
  fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
  maxWidth: 960,
  margin: '3rem auto',
  padding: '0 1.5rem',
  color: '#111',
  lineHeight: 1.5,
}
const headerRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
}
const sectionHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.75rem',
}
const h2 = { fontSize: '1.05rem', margin: 0, color: '#333' }
const muted = { color: '#666', fontSize: '0.9rem' }
const notice = {
  padding: '0.5rem 0.75rem',
  borderRadius: 6,
  fontSize: '0.875rem',
  marginBottom: '1rem',
}
const table = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.9rem',
}
const th = {
  textAlign: 'left',
  padding: '0.5rem 0.75rem',
  borderBottom: '1px solid #e5e7eb',
  fontWeight: 600,
  fontSize: '0.8rem',
  color: '#666',
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
}
const td = {
  padding: '0.5rem 0.75rem',
  borderBottom: '1px solid #f3f4f6',
}
const inlineForm = { display: 'inline', margin: 0, marginLeft: '0.5rem' }
const smallBtn = {
  padding: '0.25rem 0.625rem',
  border: '1px solid #d4d4d8',
  borderRadius: 4,
  background: 'white',
  cursor: 'pointer',
  fontSize: '0.8rem',
}
const dangerBtn = {
  ...smallBtn,
  color: '#991b1b',
  borderColor: '#fecaca',
}
const primaryBtn = {
  padding: '0.4rem 0.875rem',
  border: '1px solid #111',
  borderRadius: 6,
  background: '#111',
  color: 'white',
  textDecoration: 'none',
  fontSize: '0.875rem',
}
const link = { color: '#111', textDecoration: 'none' }
const linkButton = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#111',
  font: 'inherit',
  padding: 0,
}
