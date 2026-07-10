import { sequelize } from '../../db/sequelize'
import { fields } from './DigestSetting.fields'

// One row per organization holding the weekly digest's send hour and the
// last-sent timestamp that guards against double-sending in a week.
export const DigestSetting = sequelize.define('digest_setting', fields, {
  tableName: 'digest_setting',
  timestamps: false
})
