import { showToast } from '@/ui/molecules/toastBus'
import { runPlan } from './runPlan'
import { stoppedMessage } from './stoppedMessage'

// One run of the plan. The keys that land are collected here rather than
// read back out of React state — an async chain only ever sees the state as
// it was at the click — so `settle` is handed exactly what happened. A step
// that fails stops the run: it is said out loud, and only what landed
// leaves the surface, with the rest still selected to try again.
export function runOnce(plan, mark, settle) {
  const landed = []

  const report = (keys) => {
    landed.push(...keys)
    mark(keys)
  }

  const done = () => settle(new Set(landed))

  const stop = (error) => {
    showToast(stoppedMessage(landed.length, error))
    done()
  }

  return runPlan(plan, report).then(done, stop)
}
