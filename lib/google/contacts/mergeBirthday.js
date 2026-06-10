import { birthdayString } from './birthdayString'
import { googleBirthday } from './googleBirthday'
import { fillCrmBirthday } from './fillCrmBirthday'
import { pushBirthday } from './pushBirthday'
import { recordConflict } from './recordConflict'

// Reconcile birthday as one logical field (day+month+year together).
export async function mergeBirthday(account, token, contact, person, budget) {
  const crm =
    birthdayString(contact.birth_day, contact.birth_month, contact.birth_year)
  const google = googleBirthday(person)

  if (!crm && !google) return

  if (crm === google) return

  if (!crm) return fillCrmBirthday(contact, person)

  if (!google)
    return account.is_primary && budget.take() &&
      pushBirthday(account, token, contact, person)

  await recordConflict(account, person, 'birthday', crm, google)
}
