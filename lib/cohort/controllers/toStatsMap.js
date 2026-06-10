// Fold raw paid-registration aggregate rows into a per-cohort map of
// { filled, revenue }.
export function toStatsMap(rows) {
  return rows.reduce((map, row) => {
    map[row.cohort_id] = {
      filled: Number(row.filled),
      revenue: Number(row.revenue)
    }

    return map
  }, {})
}
