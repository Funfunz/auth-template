import path from 'path'
import { Funfunz } from '@funfunz/core/lib/index.js'
import logger from './logger.js'
import models from '../models/index.js'
import mutations from '../graphql/mutations/index.js'
import queries from '../graphql/queries/index.js'
import { Connector as blobStorageConnector } from '@funfunz/azure-blob-storage-connector'
import { Connector as sqlDataConnector} from '@funfunz/sql-data-connector'
import { Connector as jsonDataConnector} from '@funfunz/json-data-connector'
import { fileURLToPath } from 'url'
const log = logger('setup/funfunz')
log('start')

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function generateFunfunz() {
  log('building funfunz')
  const connectors = {
    mainDatabase: {
      connector: sqlDataConnector,
      config: {
        client: 'mysql2',
        host: process.env.DB_HOST || "127.0.0.1",
        database: process.env.DB_NAME || "test_db",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || 'password',
        port: "3306",
      },
    },
    jsonDatabase: {
      connector: jsonDataConnector,
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