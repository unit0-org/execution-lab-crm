import { Inline } from '@/ui/layout/Inline'

/**
 * The top-right cluster of page-level actions on a detail page (Edit,
 * Download, Send, an Add menu, …). One home for that row so every page's
 * actions sit and space identically; wraps on narrow screens.
 */
export function PageActions({ children }) {
  return <Inline gap="sm">{children}</Inline>
}
