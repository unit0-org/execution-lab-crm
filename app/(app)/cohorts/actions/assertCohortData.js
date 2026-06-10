// Throw when the cohort form is missing a required field; otherwise
// return the data unchanged for chaining.
export function assertCohortData(data) {
  if (!data.label) throw new Error('Label is required')

  if (!data.start_date) throw new Error('Start date is required')

  return data
}
