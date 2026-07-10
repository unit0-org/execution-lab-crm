import { Op } from 'sequelize'
import { Contact } from '@/lib/contact/models'
import { birthdayWindow } from './birthdayWindow'
import { sortBirthdays } from './sortBirthdays'

const monthDayWhere = (w) => ({ birth_month: w.month, birth_day: w.day })

// Contacts with a birthday in the next 7 days (business tz), soonest first.
export async function upcomingBirthdays() {
  const window = birthdayWindow()
  const rows = await Contact.findAll({
    where: { [Op.or]: window.map(monthDayWhere) },
    attributes: ['id', 'first_name', 'last_name', 'birth_month', 'birth_day']
  })

  return sortBirthdays(rows, window)
}
