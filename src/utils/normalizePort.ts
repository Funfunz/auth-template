export function normalizePort() {
  const PORT = process.env.PORT
  
  const port = Number(PORT)

  if (port > 0 ) {
    return port
  }

  if (PORT && PORT !== '0') {
    return PORT
  }
  
  throw 'Invalid PORT'
}