import { NextResponse } from 'next/server'
import { connectOrigin } from '@/lib/google/controllers/redirectUri'
import { consentUrl } from '@/lib/google/controllers/connectUrls'

// Start the direct-Google OAuth flow for connecting an extra account.
export async function GET(request) {
  const origin = connectOrigin(request)

  return NextResponse.redirect(consentUrl(origin))
}
