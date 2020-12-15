import { Funfunz } from '@funfunz/core'

import config from './config'
import models from './models'

const funfunz = new Funfunz({
  config,
  // @ts-ignore
  settings: models
})

export default funfunz