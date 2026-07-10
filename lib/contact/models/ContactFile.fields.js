import { DataTypes } from 'sequelize'

// Metadata for a file attached to a contact. The bytes live in the private
// `contact-file` Storage bucket at `bucket_path`; only this row is in
// Postgres. `uploaded_by` is the Supabase user id who added it (nullable).
export const fields = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  contact_id: DataTypes.UUID,
  bucket_path: DataTypes.TEXT,
  file_name: DataTypes.TEXT,
  mime_type: DataTypes.TEXT,
  size_bytes: DataTypes.INTEGER,
  uploaded_by: DataTypes.UUID,
  created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}
