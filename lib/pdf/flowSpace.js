import { margin } from './pdfPage'
import { addFlowPage } from './flowPage'

// Guarantee `needed` px of vertical room below the cursor, spilling to a
// fresh page when the bottom margin would be crossed.
export function ensureSpace(ctx, needed) {
  if (ctx.y - needed >= margin) return

  addFlowPage(ctx)
}
