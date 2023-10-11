import {migrate} from "postgres-migrations"

import {config} from "../config"

export interface Migrator {
  isComplete(): boolean
  runMigrations(): Promise<void>
}

export default function createMigrator(): Migrator {
  let complete = false

  return {
    isComplete() {
      return complete
    },
    async runMigrations(): Promise<void> {
      console.info("Attempting database migrations")

      return migrate(
        {
          database: config.dbName,
          user: config.dbUsername,
          password: config.dbPassword,
          host: config.dbHost,
          port: config.dbPort,
          ensureDatabaseExists: true,
        },
        "src/db/migrations",
      )
        .then((migrations) => {
          console.info("Successfully migrated database", {
            numberOfMigrations: migrations.length,
          })
          complete = true
        })
        .catch((e) => {
          console.log("e", e)
          console.info("Could not run database migrations")
          process.exit(1)
        })
    },
  }
}
