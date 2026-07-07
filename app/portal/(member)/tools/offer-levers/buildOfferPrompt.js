import context from './data/offerContext.json'
import levers from './data/offerLevers.json'
import template from './data/promptTemplate.json'
import { fieldValue } from './fieldValue'
import { frameworkUrl } from './frameworkUrl'
import { asLeverText } from './leverStorage'

const clean = (values, id) => asLeverText(values[id]).trim()
const fieldLine = (values, lists) => (f) =>
  `${f.promptLabel}: ${fieldValue(f, values, lists)}`
const leverLine = (values) => (l) => `${l.label}: ${clean(values, l.id)}`

const frameworkPara = () =>
  `${template.frameworkLead} ${frameworkUrl()}. ${template.frameworkNote}`
const leversLine = (values) => `${levers.map(leverLine(values)).join('; ')}.`

// Assemble the offer into a strategic-architect prompt: framework guide
// (it holds the lever definitions), offer context, levers, then the task.
export function buildOfferPrompt(values, lists) {
  return [
    template.intro, '',
    frameworkPara(), '',
    template.contextHeading,
    ...context.map(fieldLine(values, lists)), '',
    template.leversHeading,
    leversLine(values), '',
    template.taskHeading,
    ...template.task
  ].join('\n')
}
