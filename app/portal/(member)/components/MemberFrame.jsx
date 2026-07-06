'use client'

import { Shell } from '@/ui/layout/Shell'
import { Page } from '@/ui/layout/Page'
import { Hamburger } from '@/ui/layout/Hamburger'
import { Toaster } from '@/ui/organisms/Toaster'
import { MemberSidebar } from './MemberSidebar'
import { useMemberSidebar } from '../hooks/useMemberSidebar'

// The member area's full-height sidebar shell (backoffice-style frame).
export function MemberFrame({ email, children }) {
  const nav = useMemberSidebar()
  const sidebar = <MemberSidebar email={email} nav={nav} />

  return (
    <Shell sidebar={sidebar} open={nav.open} onClose={nav.close}>
      <Page>
        <Hamburger onClick={nav.toggle} />
        {children}
      </Page>
      <Toaster />
    </Shell>
  )
}
