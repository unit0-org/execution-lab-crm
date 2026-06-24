import { PortalShell } from '@/ui/layout/PortalShell'

// Payment pages render in the shared portal frame (no masthead, no sidebar).
export default function PortalPayLayout({ children }) {
  return <PortalShell>{children}</PortalShell>
}
