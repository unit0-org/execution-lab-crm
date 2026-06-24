import { Contact } from '@/lib/contact/models/Contact'
import { Cohort } from '../../cohort/models/Cohort'
import { CohortResource } from '../../cohort/models/CohortResource'
import { Registration } from './Registration'
import { WaitlistEntry } from '../../waitlist/models/WaitlistEntry'

// Single wiring point for the registration domain so each model's
// associations are declared exactly once. Other module indexes re-export
// from here rather than re-running associate().
const models = { Contact, Cohort, CohortResource, Registration, WaitlistEntry }

Cohort.associate(models)
CohortResource.associate(models)
Registration.associate(models)
WaitlistEntry.associate(models)

export { Cohort, CohortResource, Registration, WaitlistEntry }
