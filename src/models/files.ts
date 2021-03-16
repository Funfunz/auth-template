import { model } from '@funfunz/azure-blob-storage-connector'

const filesModel = model({
  name: 'files',
  visible: true,
  connector: 'azureBlobStorage'
})

const contentProperty = filesModel.properties.find(p => p.name === 'content')
if (contentProperty) {
  contentProperty.backoffice = {
    visible: {
      entityPage: false
    }
  }
}

export default filesModel