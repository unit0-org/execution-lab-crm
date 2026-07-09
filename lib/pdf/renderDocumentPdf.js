import { createFlowDoc } from './flowDoc'
import { drawDocTitle } from './docTitle'
import { drawDocSection } from './docSection'

// Render a sectioned document model to branded PDF bytes (Buffer). The model
// is { kicker, title, subtitle, sections: [{ heading, rows?, blocks? }] }.
export async function renderDocumentPdf(doc) {
  const { doc: pdf, ctx } = await createFlowDoc()

  drawDocTitle(ctx, doc)

  for (const section of doc.sections) drawDocSection(ctx, section)

  return Buffer.from(await pdf.save())
}
