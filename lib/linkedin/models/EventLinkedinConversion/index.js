import { sequelize } from '@/lib/db/sequelize'
import { fields } from './fields'
import { findRuleForEvent } from './classMethods/findRuleForEvent'

// One event ↔ one LinkedIn conversion rule. The row's existence is the
// opt-in: no row means registrations for that event are never reported.
export const EventLinkedinConversion = sequelize.define(
  'event_linkedin_conversion',
  fields,
  { tableName: 'event_linkedin_conversion', timestamps: false }
)

Object.assign(EventLinkedinConversion, { findRuleForEvent })
