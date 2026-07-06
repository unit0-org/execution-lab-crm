import context from './data/offerContext.json'
import template from './data/promptTemplate.json'
import { fieldValue } from './fieldValue'
import { frameworkUrl } from './frameworkUrl'

const fieldLine = (values, lists) => (f) =>
  `${f.promptLabel}: ${fieldValue(f, values, lists)}`

// Assemble the offer into a strategic-architect prompt: send the model to
// the public framework guide first (its AI won't know our levers), then the
// offer context and the task. Lever settings aren't dumped here — the guide
// carries the framework.
export function buildOfferPrompt(values, lists) {
  return [
    template.intro, '',
    template.frameworkLead, frameworkUrl(), template.frameworkNote, '',
    template.contextHeading,
    ...context.map(fieldLine(values, lists)), '',
    template.taskHeading,
    ...template.task
  ].join('\n')
}
