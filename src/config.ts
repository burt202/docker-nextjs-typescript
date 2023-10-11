import {z} from "zod"

const dbUsername = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT
const dbName = process.env.DB_NAME

const configSchema = z.object({
  dbUsername: z.string(),
  dbPassword: z.string(),
  dbHost: z.string(),
  dbPort: z.number(),
  dbName: z.string(),
})

export type Config = z.infer<typeof configSchema>

export const config: Config = {
  dbUsername,
  dbPassword,
  dbHost,
  dbPort: parseInt(dbPort, 10),
  dbName,
}

export function validateConfig() {
  configSchema.parse(config)
}
