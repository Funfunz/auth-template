import path from 'path'
import fs from 'fs'
import express, { Router } from 'express'
import favicon from 'serve-favicon'

import logger from '../setup/logger.js'

const log = logger('routes/www')
log('start');

const router = Router()
log('router created')

// public dir
const { PUBLIC_DIR } = process.env

if (PUBLIC_DIR) {
  const publicFolder = path.join(__dirname, '..', '..', PUBLIC_DIR)

  // favicon
  router.use(favicon(path.join(publicFolder, 'favicon.ico')))

  // frontend assets
  router.use(express.static(publicFolder))

  // serve frontend html
  router.use(/^\/(?!api).*/, (req, res) => {
    fs.readFile(path.join(publicFolder, 'index.html'), (err, data) => {
      if (err) {
        res.status(500).send({ error: 'No html available' })
      } else {
        res.set('Content-Type', 'text/html')
        res.send(data)
      }
    })
  })
}
log('end')

export default router