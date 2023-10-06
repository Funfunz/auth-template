import { model } from '@funfunz/azure-blob-storage-connector/lib/index.js'
import { IEntityInfo, IProperty } from '@funfunz/core/lib/index.js';

const filesModel: any = model({
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