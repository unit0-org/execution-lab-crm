import { Sequelize } from 'sequelize'

const url = process.env.SUPABASE_DB_URL
  || 'postgres://localhost:5432/postgres'

const make = () => new Sequelize(url, {
  dialect: 'postgres',
  logging: false,
  pool: { max: 2, min: 0 },
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
})

globalThis.__sequelize = globalThis.__sequelize || make()

export const sequelize = globalThis.__sequelize
