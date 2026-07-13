// Regenerates ui/COMPONENTS.md from the source of truth: the components
// themselves. The props column is read straight off each component's
// destructured parameter list (so it can never drift from the code), and
// the "Use for" column is its /** doc block */.
//
// A component is public API — and appears in the catalog — exactly when it
// carries a doc block. Internal sub-components have none and stay out.
//
//   pnpm docs:ui          rewrite ui/COMPONENTS.md
//   pnpm docs:ui --check   fail if it is stale (used by CI)

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { parse } from '@babel/parser'

const DIRS = ['ui/atoms', 'ui/layout', 'ui/molecules', 'ui/organisms']

const TEMPLATE = 'ui/COMPONENTS.template.md'
const OUTPUT = 'ui/COMPONENTS.md'

// The template owns the headings and prose; each `<!-- table:ui/x -->`
// marker is swapped for that folder's generated table.
const markerFor = (dir) => `<!-- table:${dir} -->`

const parseFile = (src) =>
  parse(src, { sourceType: 'module', plugins: ['jsx'] })

// The doc block immediately above `export function Thing`.
const docBlockOf = (node) => {
  const comments = node.leadingComments || []
  const block = comments.filter(
    (c) => c.type === 'CommentBlock' && c.value.startsWith('*')
  )

  if (!block.length) return null

  return block[block.length - 1].value
    .split('\n')
    .map((line) => line.replace(/^\s*\*?\s?/, '').trim())
    .filter(Boolean)
    .join(' ')
    .trim()
}

const defaultOf = (value) => {
  if (value.type === 'StringLiteral') return `'${value.value}'`
  if (value.type === 'NumericLiteral') return String(value.value)
  if (value.type === 'BooleanLiteral') return String(value.value)

  return null
}

const propOf = (property) => {
  if (property.type === 'RestElement') return `...${property.argument.name}`

  const { value, key } = property

  if (value.type !== 'AssignmentPattern') return key.name

  const fallback = defaultOf(value.right)

  return fallback ? `${key.name}=${fallback}` : key.name
}

// Components take either a destructured param — ({ tone, children }) — or a
// bare `props` they destructure on the first line of the body. Read both.
const patternOf = (fn) => {
  const [param] = fn.params

  if (!param) return null
  if (param.type === 'ObjectPattern') return param
  if (param.type !== 'Identifier') return null

  const declaration = fn.body.body.find(
    (statement) =>
      statement.type === 'VariableDeclaration' &&
      statement.declarations[0]?.init?.name === param.name &&
      statement.declarations[0]?.id.type === 'ObjectPattern'
  )

  if (!declaration) return `...${param.name}`

  return declaration.declarations[0].id
}

const propsOf = (fn) => {
  const pattern = patternOf(fn)

  if (!pattern) return ''
  if (typeof pattern === 'string') return `\`${pattern}\``

  return pattern.properties
    .map(propOf)
    .map((prop) => `\`${prop}\``)
    .join(', ')
}

const componentsIn = (dir) => {
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.jsx') && !f.includes('.stories.'))
    .sort()

  const found = []

  for (const file of files) {
    const ast = parseFile(readFileSync(`${dir}/${file}`, 'utf8'))

    for (const node of ast.program.body) {
      if (node.type !== 'ExportNamedDeclaration') continue

      const fn = node.declaration

      if (fn?.type !== 'FunctionDeclaration') continue

      const description = docBlockOf(node)

      if (!description) continue

      found.push({ name: fn.id.name, props: propsOf(fn), description })
    }
  }

  return found
}

const tableFor = (dir) => {
  const rows = componentsIn(dir).map(
    (c) => `| \`${c.name}\` | ${c.props || '—'} | ${c.description} |`
  )

  if (!rows.length) throw new Error(`no documented components in ${dir}`)

  return ['| Component | Props | Use for |', '|---|---|---|', ...rows].join(
    '\n'
  )
}

const build = () =>
  DIRS.reduce(
    (doc, dir) => doc.replace(markerFor(dir), tableFor(dir)),
    readFileSync(TEMPLATE, 'utf8')
  )

const generated = build()
const checking = process.argv.includes('--check')

if (!checking) {
  writeFileSync(OUTPUT, generated)
  console.log(`wrote ${OUTPUT}`)
  process.exit(0)
}

const current = readFileSync(OUTPUT, 'utf8')

if (current === generated) {
  console.log(`${OUTPUT} is up to date`)
  process.exit(0)
}

console.error(
  `${OUTPUT} is stale. A component's props or doc block changed without\n` +
    'regenerating it. Run: pnpm docs:ui'
)
process.exit(1)
