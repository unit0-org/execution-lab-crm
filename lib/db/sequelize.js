import { Sequelize } from 'sequelize'

const url = process.env.SUPABASE_DB_URL
  || 'postgres://localhost:5432/postgres'

const debug = process.env.DB_DEBUG === '1'

const hostOf = (u) => {
  try {
    return new URL(u).host
  } catch {
    return 'unparseable'
  }
}

if (debug) console.log('[db] host', hostOf(url))

const make = () => new Sequelize(url, {
  dialect: 'postgres',
  logging: debug ? console.log : false,
  pool: { max: 2, min: 0 },
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }
})

globalThis.__sequelize = globalThis.__sequelize || make()

export const sequelize = globalThis.__sequelize
