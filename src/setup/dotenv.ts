import dotenv from 'dotenv'
import logger from '@root/setup/logger'

const log = logger('setup/dotenv')
log('start')

dotenv.config()

const {
  DEBUG,
  NAMESPACE,
  SERVER_PORT,
  SERVER_PUBLIC_URL,
  SERVER_SESSION_SECRET,
} = process.env

log({
  DEBUG,
  NAMESPACE,
  SERVER_PORT,
  SERVER_PUBLIC_URL,
  SERVER_SESSION_SECRET,
})

log('end')