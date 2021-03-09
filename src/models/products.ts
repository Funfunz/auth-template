export default {
  name: 'products',
  connector: 'mainDatabase',
  visible: true,
  roles: {
    create: [
      'all'
    ],
    read: [
      'all'
    ],
    update: [
      'all'
    ],
    delete: [
      'all'
    ]
  },
  properties: [
    {
      name: 'id',
      searchable: true,
      model: {
        type: 'number',
        allowNull: false,
        isPk: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: false
        },
        entityPage: {
          searchable: true,
        },
        label: 'Id',
        listColumn: {},
        editField: {
          type: 'number'
        }
      }
    },
    {
      name: 'name',
      searchable: true,
      model: {
        type: 'string',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: true
        },
        entityPage: {
          searchable: true,
        },
        label: 'Name',
        listColumn: {},
        editField: {
          type: 'text'
        }
      }
    },
    {
      name: 'color',
      searchable: true,
      model: {
        type: 'string',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: false
        },
        label: 'Color',
        listColumn: {},
        entityPage: {
          filterable: {
            type: 'string',
            inputType: 'select',
            content: [
              {
                label: 'Blue',
                value: 'Blue',
              },
              {
                label: 'Red',
                value: 'Red',
              },
              {
                label: 'Yellow',
                value: 'Yellow',
              }
            ]
          },
        },
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
      searchable: true,
      model: {
        type: 'number',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: false
        },
        label: 'UserId',
        listColumn: {},
        editField: {}
      }
    }
  ],
  layout: {
    label: 'Products',
    listPage: {},
    searchField: {},
    createButton: {},
    editButton: {},
    deleteButton: {},
    editPage: {
      sections: [],
    },
  },
  relations: [
    {
      type: 'n:1',
      relationalTable: 'products',
      foreignKey: 'userId',
      remoteTable: 'users',
    }
  ]
}