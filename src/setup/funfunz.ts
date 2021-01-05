import path from 'path'
import { Funfunz } from '@funfunz/core'
import logger from '@root/setup/logger'
import models from '@root/models'
import mutations from '@root/graphql/mutations'
import queries from '@root/graphql/queries'
import { GraphQLFieldConfig } from 'graphql'

const log = logger('setup/funfunz')
log('start')

const config = {
  connectors: {
    mainDatabase: {
      type: '@funfunz/json-data-connector',
      config: {
        folderPath: path.join(__dirname, '..', '..', 'storage') 
      },
    }
  }
}
log(config)

const funfunz = new Funfunz({
  config,
  // @ts-ignore
  settings: models,
  mutations: mutations as any,
  queries: queries as any,
})

export default funfunz

log('end')