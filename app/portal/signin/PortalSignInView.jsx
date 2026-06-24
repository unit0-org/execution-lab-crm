'use client'

import { Narrow } from '@/ui/layout/Narrow'
import { Card } from '@/ui/atoms/Card'
import { SignInPanel } from './components/SignInPanel'
import { useSignInStatus } from './hooks/useSignInStatus'

// Centered, width-capped sign-in card so the form doesn't stretch the full
// portal width. The panel holds the actual sign-in methods.
export function PortalSignInView() {
  const status = useSignInStatus()

  return (
    <Narrow max={420}>
      <Card>
        <SignInPanel status={status} />
      </Card>
    </Narrow>
  )
}
