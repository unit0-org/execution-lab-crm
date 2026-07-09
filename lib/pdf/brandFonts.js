import fs from 'fs'
import path from 'path'

const dir = path.join(process.cwd(), 'lib/pdf/fonts')
const read = (name) => fs.readFileSync(path.join(dir, `${name}.ttf`))

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
