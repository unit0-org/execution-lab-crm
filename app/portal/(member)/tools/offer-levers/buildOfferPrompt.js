import context from './data/offerContext.json'
import levers from './data/offerLevers.json'
import template from './data/promptTemplate.json'
import { fieldValue } from './fieldValue'

const clean = (values, id) => (values[id] || '').trim()
const fieldLine = (values, lists) => (f) =>
  `${f.promptLabel}: ${fieldValue(f, values, lists)}`
const leverLine = (values) => (l) => `${l.label}: ${clean(values, l.id)}`

// Assemble every field + lever into the strategic-architect prompt (same
// shape as the source tool), ready to paste into an LLM.
export function buildOfferPrompt(values, lists) {
  return [
    template.intro, '',
    template.contextHeading,
    ...context.map(fieldLine(values, lists)), '',
    template.leversHeading,
    ...levers.map(leverLine(values)), '',
    template.taskHeading,
    ...template.task
  ].join('\n')
}
