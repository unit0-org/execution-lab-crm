import { margin, contentWidth } from './pdfPage'
import { cleanText } from './cleanText'
import { wrapText } from './wrapText'
import { writeLine } from './flowText'

// Wrap `text` to the content width (respecting explicit newlines) and write
// it line by line from the cursor, paginating as needed.
export function writeParagraph(ctx, text, opts) {
  const indent = opts.x ? opts.x - margin : 0
  const width = contentWidth - indent
  const rows = cleanText(text).split('\n')

  for (const row of rows) {
    const lines = wrapText(row, opts.font, opts.size, width)

    for (const line of lines) writeLine(ctx, line, opts)
  }
}
