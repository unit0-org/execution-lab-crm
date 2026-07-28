// The distinct, non-null cohort ids found in `column` of `model` — one
// grouped read per table, so asking "which cohorts are spoken for?" costs
// two queries for the whole list instead of two per cohort.
export function collectCohortIds(model, column) {
  return model.findAll({ attributes: [column], group: [column] })
    .then((rows) => rows.map((row) => row[column]).filter(Boolean))
}
