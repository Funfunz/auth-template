import { IEntityInfo } from "@funfunz/core/lib/index.js"
import { checkPermissions } from "../hooks/permissions.js"

export default {
  name: 'products',
  connector: 'jsonDatabase',
  visible: true,
  properties: [
    {
      name: 'id',
      type: 'number',
      isPk: true,
      backoffice: {
        label: 'ID'
      }
    },
    {
      name: 'productName',
      type: 'string',
      backoffice: {
        label: 'Name'
      }
    },
    {
      name: 'color',
      type: 'string',
      backoffice: {
        label: 'Color',
        editField: {
          type: 'select',
          options: [
            { label: 'Red', value: 'red' },
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue' }
          ]
        }
      }
    },
    {
      name: 'userId',
      type: 'number',
      backoffice: {
        label: 'User'
      }
    },
  ],
  backoffice: {
    label: 'Products',
  },
  relations: [
    {
      type: 'n:1',
      foreignKey: 'userId',
      remoteEntity: 'users',
    },
    {
      type: 'm:n',
      relationalEntity: 'productsfiles',
      foreignKey: 'productId',
      remoteEntity: 'files',
      remoteForeignKey: 'name',
    },
  ],
  hooks: {
    all: {
      beforeResolver: checkPermissions
    }
  }
} as IEntityInfo