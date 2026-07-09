import { page } from './pdfPage'

// Start a fresh page and move the cursor back to the top margin.
export function addFlowPage(ctx) {
  ctx.page = ctx.doc.addPage([page.width, page.height])
  ctx.y = ctx.top
}
