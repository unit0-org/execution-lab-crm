import { NextResponse } from 'next/server'
import { connectOrigin } from '@/lib/google/controllers/redirectUri'
import { finishGoogleConnect }
  from '@/lib/google/controllers/finishGoogleConnect'

const back = (origin, query) =>
  NextResponse.redirect(`${origin}/settings?tab=google${query}`)

// Finish the connect flow, then return to the Google settings tab.
export async function GET(request) {
  const origin = connectOrigin(request)
  const code = new URL(request.url).searchParams.get('code')

  if (!code) return back(origin, '&error=missing_code')

  try {
    await finishGoogleConnect(code, origin)

    return back(origin, '')
  } catch (e) {
    return back(origin, `&error=${encodeURIComponent(e.message)}`)
  }
}
