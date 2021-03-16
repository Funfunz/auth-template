import path from 'path'
import { Funfunz } from '@funfunz/core'
import logger from '@root/setup/logger'
import models from '@root/models'
import mutations from '@root/graphql/mutations'
import queries from '@root/graphql/queries'

const log = logger('setup/funfunz')
log('start')

function generateConfig() {
  log('generating config')
  switch (process.env.FUNFUNZ_CONNECTOR) {
    case 'sql':
      return {
        connectors: {
          mainDatabase: {
            type: "@funfunz/sql-data-connector",
            config: {
              client: 'mysql2',
              host: process.env.DB_HOST || "127.0.0.1",
              database: process.env.DB_NAME || "test_db",
              user: process.env.DB_USER || "root",
              password: process.env.DB_PASS || 'password',
              port: "3306"
            },
          }
        }
      }
    case 'json':
    default:
      return {
        connectors: {
          mainDatabase: {
            type: '@funfunz/json-data-connector',
            config: {
              folderPath: path.join(__dirname, '..', '..', 'storage') 
            },
          },
          azureBlobStorage: {
            type: "@funfunz/azure-blob-storage-connector",
            config: {
              connectionString: process.env.CONNECTION_STRING,
              containerName: process.env.CONTAINER_NAME
            },
          }
        }
      }
  }
}

const config = generateConfig()
log(config)

export function generateFunfunz() {
  log('building funfunz')
  const funfunz = new Funfunz({
    // @ts-ignore
    config,
    // @ts-ignore
    settings: models,
    mutations: mutations as any,
    queries: queries as any,
  })
  log('built funfunz')
  return funfunz
}
log('end')