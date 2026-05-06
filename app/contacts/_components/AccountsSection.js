import { sectionHeader } from '../_styles'
import { primaryBtn } from '../_styles/buttons'
import { AccountsTable } from './AccountsTable'

export function AccountsSection({ accounts }) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <div style={sectionHeader}>
        <h2 style={{ fontSize: '1.05rem', margin: 0, color: '#333' }}>
          Connected Google accounts
        </h2>
        <a href="/api/google/connect" style={primaryBtn}>+ Connect Google account</a>
      </div>
      <AccountsTable accounts={accounts} />
    </section>
  )
}
