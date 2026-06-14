import { portalPublicOrigin } from '@/lib/portal/portalPublicOrigin'

const DESCRIPTION = 'Income First — an 8-week online cohort to build an '
  + 'offer that sells, one working channel, and the systems to run both.'

const TITLE = 'Fundamentals — Registration | The Execution Lab'

// Portal metadata, including Open Graph + Twitter cards so shared
// registration links render a rich preview. The preview image is the
// sibling opengraph-image route, resolved against metadataBase.
export const metadata = {
  metadataBase: new URL(portalPublicOrigin()),
  title: 'The Execution Lab — Fundamentals Registration',
  description: DESCRIPTION,
  openGraph: {
    title: TITLE, description: DESCRIPTION,
    siteName: 'The Execution Lab', type: 'website'
  },
  twitter: {
    card: 'summary_large_image', title: TITLE, description: DESCRIPTION
  }
}
