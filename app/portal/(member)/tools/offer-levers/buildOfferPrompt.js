import context from './data/offerContext.json'
import levers from './data/offerLevers.json'
import template from './data/promptTemplate.json'
import { fieldValue } from './fieldValue'
import { frameworkUrl } from './frameworkUrl'

const clean = (values, id) => (values[id] || '').trim()
const fieldLine = (values, lists) => (f) =>
  `${f.promptLabel}: ${fieldValue(f, values, lists)}`
const leverLine = (values) => (l) => `${l.label}: ${clean(values, l.id)}`

// Assemble the offer into a strategic-architect prompt that first sends the
// model to the public framework guide (its AI won't know our levers), then
// lists the context, the chosen lever settings, and the task.
export function buildOfferPrompt(values, lists) {
  return [
    template.intro, '',
    template.frameworkLead, frameworkUrl(), template.frameworkNote, '',
    template.contextHeading,
    ...context.map(fieldLine(values, lists)), '',
    template.leversHeading,
    ...levers.map(leverLine(values)), '',
    template.taskHeading,
    ...template.task
  ].join('\n')
}
