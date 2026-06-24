import { PortalShell } from '@/ui/layout/PortalShell'

// The member sign-in sits in the shared portal frame, without the public
// masthead or the member sidebar.
export default function PortalSignInLayout({ children }) {
  return <PortalShell>{children}</PortalShell>
}
