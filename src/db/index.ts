import {Pool} from "pg"

import {config} from "../config"

const pool = new Pool({
  database: config.dbName,
  user: config.dbUsername,
  password: config.dbPassword,
  host: config.dbHost,
  port: config.dbPort,
})

export const query = async (text: string, params: Array<unknown>) => {
  const res = await pool.query(text, params)
  return res
}
