import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const dynamic = 'force-dynamic'

async function signInWithGoogle(formData) {
  'use server'
  const next = formData.get('next') || '/contacts'

  const supabase = await createClient()

  const h = await headers()
  const origin = process.env.NEXT_PUBLIC_SITE_URL || `https://${h.get('host')}`

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(next)}`,
    },
  })

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`)
  }

  redirect(data.url)
}

export default async function LoginPage({ searchParams }) {
  const params = await searchParams
  const next = params?.next || '/contacts'
  const errorMsg = params?.error

  return (
    <main style={{
      maxWidth: 420,
      margin: '6rem auto',
      padding: '0 1.5rem',
      fontFamily: 'var(--font-geist-sans), system-ui, sans-serif',
      color: '#111',
    }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
        Execution Lab CRM
      </h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Sign in to continue.
      </p>

      <form action={signInWithGoogle}>
        <input type="hidden" name="next" value={next} />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            border: '1px solid #d4d4d8',
            borderRadius: 6,
            background: 'white',
            cursor: 'pointer',
            fontSize: '0.95rem',
          }}
        >
          Sign in with Google
        </button>
      </form>

      {errorMsg && (
        <p style={{ color: '#991b1b', fontSize: '0.875rem', marginTop: '1rem' }}>
          {errorMsg}
        </p>
      )}
    </main>
  )
}
