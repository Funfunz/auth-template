import { model } from '@funfunz/azure-blob-storage-connector'
import { IEntityInfo, IProperty } from '@funfunz/core/lib/generator/configurationTypes'

const filesModel: IEntityInfo = model({
  name: 'files',
  visible: true,
  connector: 'azureBlobStorage'
});

(filesModel.properties.find(p=>p.name==='content') as IProperty).backoffice = {
  visible: {
    entityPage: false
  }
}

export default filesModel