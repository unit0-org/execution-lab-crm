// A server action reports a refusal as `{ error }`. Turn it into a
// rejection: a step that didn't happen must never pass for one that did.
export function failIfError(result) {
  if (result?.error) throw new Error(result.error)

  return result
}
