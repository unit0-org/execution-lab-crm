import fs from 'fs'
import path from 'path'

const dir = path.join(process.cwd(), 'lib/pdf/fonts')
const files = {}

const load = (name) => fs.readFileSync(path.join(dir, `${name}.ttf`))

// Read once per process, not once per PDF: the set is ~2.3 MB, and a batch
// of invoices re-reading it per document is heap churn on the way to an
// out-of-memory crash. Embedding never mutates the bytes, so one copy is
// safe to share across documents.
const read = (name) => {
  if (!files[name]) files[name] = load(name)

  return files[name]
}

// Embed Montserrat (display) + JetBrains Mono (mono), all subset. Shared by
// every branded PDF (invoice, offer, …).
export async function embedFonts(doc) {
  const at = (name) => doc.embedFont(read(name), { subset: true })

  return {
    reg: await at('Montserrat-Regular'),
    semi: await at('Montserrat-SemiBold'),
    bold: await at('Montserrat-Bold'),
    black: await at('Montserrat-Black'),
    mono: await at('JetBrainsMono-Regular'),
    monoBold: await at('JetBrainsMono-Bold')
  }
}
