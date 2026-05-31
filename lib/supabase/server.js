import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const adapter = (store) => ({
  getAll: () => store.getAll(),
  setAll: (toSet) => {
    try {
      toSet.forEach((c) => store.set(c.name, c.value, c.options))
    } catch {
      // Server Component: cookies are read-only; middleware refreshes them.
    }
  }
})

export async function createClient() {
  const store = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { cookies: adapter(store) }
  )
}
