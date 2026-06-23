// Throw when the cohort form is missing a required field or the
// registration window is inverted; otherwise return the data for chaining.
export function assertCohortData(data) {
  if (!data.label) throw new Error('Label is required')

  if (!data.start_date) throw new Error('Start date is required')

  const opens = data.registration_opens_at
  const closes = data.registration_closes_at

  if (opens && closes && opens > closes)
    throw new Error('Registration must open before it closes')

  return data
}
