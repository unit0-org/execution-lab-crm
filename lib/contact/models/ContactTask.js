import { DataTypes } from 'sequelize'
import { sequelize } from '@/lib/db/sequelize'

const id = {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  primaryKey: true
}

// A follow-up task on a contact, mirrored to Google Tasks. completed_at
// null = still to do; the google_* columns link it to its Google task.
export const ContactTask = sequelize.define(
  'contact_task',
  {
    id,
    contact_id: DataTypes.UUID,
    title: DataTypes.TEXT,
    due_at: DataTypes.DATE,
    completed_at: DataTypes.DATE,
    google_task_id: DataTypes.TEXT,
    google_tasklist_id: DataTypes.TEXT,
    google_account_email: DataTypes.TEXT,
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
  },
  { tableName: 'contact_task', timestamps: false }
)
