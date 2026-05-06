import { SignInForm } from './_components/SignInForm'
import { main, errorText } from './_styles'

export const dynamic = 'force-dynamic'

export default async function LoginPage({ searchParams }) {
  const params = await searchParams
  const next = params?.next || '/contacts'
  const errorMsg = params?.error

  return (
    <main style={main}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        Execution Lab CRM
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Sign in to continue.</p>
      <SignInForm next={next} />
      {errorMsg && <p style={errorText}>{errorMsg}</p>}
    </main>
  )
}
