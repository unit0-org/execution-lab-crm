import { toolResult } from './toolResult'

const isDisabled = () => process.env.MCP_DISABLE_DESTRUCTIVE === 'true'

// Gate for irreversible/financial MCP tools. Returns a short-circuit
// tool result (so the action is NOT performed) when the destructive
// profile is disabled by env, or when the caller has not set
// confirm: true. Returns null to let the action proceed.
export function guardDestructive(action, confirm) {
  if (isDisabled()) {
    return toolResult({ refused: true, action,
      message: `${action} is disabled on this read-only MCP profile.` })
  }

  if (confirm === true) return null

  return toolResult({ confirmationRequired: true, action,
    message: `${action} is irreversible. A human must approve it: ` +
      're-call with confirm: true only after the user has agreed.' })
}
