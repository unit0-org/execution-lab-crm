import { isoDate, ym, monthName, dayLabel } from './dateParts'
import { quarterOf, weekStart } from './dateParts'

const year = (d) => `${d.getUTCFullYear()}`

const builders = {
  date: (d) => ({ key: isoDate(d), label: dayLabel(d) }),
  week: (d) => builders.date(weekStart(d)),
  month: (d) => ({ key: ym(d), label: monthName(d) }),
  quarter: (d) => ({ key: `${year(d)}-Q${quarterOf(d)}`,
    label: `Q${quarterOf(d)} ${year(d)}` }),
  year: (d) => ({ key: year(d), label: year(d) })
}

// The { key, label } bucket a purchase date falls into for a grain.
// Keys sort lexicographically into chronological order.
export function bucketOf(date, grain) {
  return (builders[grain] || builders.date)(date)
}
