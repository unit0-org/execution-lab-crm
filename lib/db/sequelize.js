import { Sequelize } from 'sequelize'
import pg from 'pg'

const url = process.env.SUPABASE_DB_URL
  || 'postgres://localhost:5432/postgres'

// dialectModule: pg is required on Vercel — Sequelize's dynamic require('pg')
// isn't traced into the serverless bundle, so we pass the module explicitly.
const make = () => new Sequelize(url, {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
  pool: { max: 2, min: 0 },
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
})

globalThis.__sequelize = globalThis.__sequelize || make()

export const sequelize = globalThis.__sequelize
