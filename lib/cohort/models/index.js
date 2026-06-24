// Associations are wired once in the registration-domain index; re-export
// from there so models are never associated twice.
export { Cohort, CohortFolder, CohortResource }
  from '../../registration/models'
