import { cookies } from 'next/headers'

const COOKIE_NAME = 'google_oauth_state'
const FIVE_MIN = 600

export async function setOAuthState(state, { secure }) {
  const store = await cookies()
  const opts = { httpOnly: true, secure, sameSite: 'lax', path: '/', maxAge: FIVE_MIN }
  store.set(COOKIE_NAME, state, opts)
}

export async function consumeOAuthState() {
  const store = await cookies()
  const value = store.get(COOKIE_NAME)?.value
  store.delete(COOKIE_NAME)
  return value
}

export const matchesState = (got, expected) => Boolean(got && expected && got === expected)
