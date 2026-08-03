import { Op } from 'sequelize'
import { Registration } from '@/lib/registration/models'
import { reminderWindow } from './reminderWindow'

// Reserved seats close enough to lapsing to be worth a warning, still held,
// and not yet reminded — as plain objects.
export function findLapsingReservations() {
  const { after, before } = reminderWindow()

  return Registration.findAll({
    where: {
      status: 'pending',
      reservation_reminder_sent_at: null,
      reserved_at: { [Op.gt]: after, [Op.lte]: before }
    }
  }).then((rows) => rows.map((row) => row.toJSON()))
}
