import { linkedinFetch, linkedinHeaders } from './client'
import { ruleIdFromUrn } from './ruleIdFromUrn'

// Read one conversion rule. LinkedIn owns its attribution windows, so we
// read them back at read time rather than keeping a copy that can drift
// the moment someone edits the rule in Campaign Manager.
export async function getConversionRule(urn) {
  const res = await linkedinFetch(`/conversions/${ruleIdFromUrn(urn)}`, {
    headers: linkedinHeaders()
  })

  return res.json()
}
