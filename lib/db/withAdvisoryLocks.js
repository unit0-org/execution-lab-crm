import { sequelize } from './sequelize'

// The one place raw SQL is allowed: an advisory lock touches no table, so
// there is nothing for Sequelize to model. Held until the transaction
// ends, so the work it guards is committed before the next caller runs.
const takeLock = (transaction, key) => sequelize.query(
  'select pg_advisory_xact_lock(hashtext($1))',
  { bind: [key], transaction }
)

// Run `work` in a transaction that holds an advisory lock on every key,
// so concurrent callers naming the same key queue instead of racing.
// Keys are locked in sorted order: two callers that share some — but not
// all — of their keys still take them in the same order, so they can
// never deadlock against each other.
export function withAdvisoryLocks(keys, work) {
  return sequelize.transaction(async (transaction) => {
    for (const key of [...keys].sort()) await takeLock(transaction, key)

    return work(transaction)
  })
}
