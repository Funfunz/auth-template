import path from 'path'
import { Funfunz } from '@funfunz/core/lib/index.js'
import logger from './logger.js'
import models from '../models/index.js'
import mutations from '../graphql/mutations/index.js'
import queries from '../graphql/queries/index.js'
import { Connector as blobStorageConnector } from '@funfunz/azure-blob-storage-connector'
const log = logger('setup/funfunz')
log('start')

export async function generateFunfunz() {
  log('building funfunz')
  const module = await import(process.env.FUNFUNZ_CONNECTOR === 'sql'
    ? '@funfunz/sql-data-connector'
    : '@funfunz/json-data-connector'
  )
  const connectors = {
    mainDatabase: process.env.FUNFUNZ_CONNECTOR === 'sql' ? {
      connector: module.Connector,
      config: {
        client: 'mysql2',
        host: process.env.DB_HOST || "127.0.0.1",
        database: process.env.DB_NAME || "test_db",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || 'password',
        port: "3306",
      },
    } : {
      connector: module.Connector,
      config: {
        folderPath: path.join(__dirname, '..', '..', 'storage'),
      },
    },
    azureBlobStorage: {
      connector: blobStorageConnector,
      config: {
        connectionString: process.env.CONNECTION_STRING,
        containerName: process.env.CONTAINER_NAME
      },
    }
  }

  const funfunz = new Funfunz({
    config: {
      graphiql: process.env.NODE_ENV !== 'production',
      // @ts-ignore
      connectors,
    },
    // @ts-ignore
    entities: models,
    mutations: mutations as any,
    queries: queries as any,
  })
  log('built funfunz')

  return funfunz
}
log('end')