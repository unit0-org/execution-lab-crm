// Every user story in the Feature Spec, grouped by domain. The artifact stays
// the source of truth; this is its machine-readable mirror. A new or changed
// story must be mirrored here, or the report stops covering it.
import * as contacts from './contacts/index.js';
import * as company from './company/index.js';
import * as cohorts from './cohorts/index.js';
import * as portal from './portal/index.js';
import * as invoices from './invoices/index.js';
import * as meetings from './meetings/index.js';
import * as operations from './operations/index.js';
import * as lookandfeel from './lookandfeel/index.js';
import { toDomain } from './toDomain.js';

const modules = [
  contacts, company, cohorts, portal, invoices, meetings, operations,
  lookandfeel
];

export const domains = modules.map(toDomain);

export const userStories = domains.flatMap((domain) => domain.stories);
