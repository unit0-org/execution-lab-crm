// Associations are wired once in the registration-domain index; re-export
// Cohort from there so it's never associated twice.
export { Cohort } from '../../registration/models'
