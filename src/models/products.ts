import { checkPermissions } from "@root/hooks/permissions"

export default {
  name: 'products',
  connector: 'mainDatabase',
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
      name: 'name',
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
    }
  ],
  backoffice: {
    label: 'Products',
  },
  relations: [
    {
      type: 'n:1',
      foreignKey: 'userId',
      remoteEntity: 'users',
    }
  ],
  hooks: {
    all: {
      beforeResolver: checkPermissions
    }
  }
}