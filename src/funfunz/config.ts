import path from 'path'

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
export default config