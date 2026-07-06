import { Op } from 'sequelize'

// A purchase counts as earned revenue unless it was refunded (a null status
// still counts, matching how the buckets have always filtered). The single
// definition of "real" money — every revenue/spend aggregate goes through
// Purchase.scope('earned'), never an inline status check.
export const earnedScope = {
  where: {
    [Op.or]: [{ status: { [Op.ne]: 'refunded' } }, { status: null }]
  }
}
