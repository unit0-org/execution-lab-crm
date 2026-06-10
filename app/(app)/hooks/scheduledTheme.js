// The theme follows the clock: dark from 18:00 to 05:00, light by day.
const NIGHT_START = 18
const DAY_START = 5

// 'night' between 18:00 and 05:00, otherwise 'day'.
export function periodAt(hour) {
  return hour >= NIGHT_START || hour < DAY_START ? 'night' : 'day'
}

export function themeForPeriod(period) {
  return period === 'night' ? 'dark' : 'light'
}
