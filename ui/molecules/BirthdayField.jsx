import { Inline } from '../layout/Inline'
import { TextField } from '../atoms/TextField'

/**
 * Day/month/year inputs for a `Form`
 * (`birth_day`/`birth_month`/`birth_year`).
 */
export function BirthdayField({ day, month, year }) {
  return (
    <Inline gap="sm">
      <TextField label="Day" name="birth_day" type="number"
        min="1" max="31" placeholder="DD" defaultValue={day} />
      <TextField label="Month" name="birth_month" type="number"
        min="1" max="12" placeholder="MM" defaultValue={month} />
      <TextField label="Year" name="birth_year" type="number"
        placeholder="YYYY (optional)" defaultValue={year} />
    </Inline>
  )
}
