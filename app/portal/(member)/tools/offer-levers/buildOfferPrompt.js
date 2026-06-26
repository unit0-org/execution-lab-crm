import context from './data/offerContext.json'
import levers from './data/offerLevers.json'
import template from './data/promptTemplate.json'

const clean = (values, id) => (values[id] || '').trim()
const fieldLine = (values) => (f) => `${f.promptLabel}: ${clean(values, f.id)}`
const leverLine = (values) => (l) => `${l.label}: ${clean(values, l.id)}`

// Assemble every field + lever into the strategic-architect prompt (same
// shape as the source tool), ready to paste into an LLM.
export function buildOfferPrompt(values) {
  return [
    template.intro, '',
    template.contextHeading,
    ...context.map(fieldLine(values)), '',
    template.leversHeading,
    ...levers.map(leverLine(values)), '',
    template.taskHeading,
    ...template.task
  ].join('\n')
}
