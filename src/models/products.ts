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
        type: 'int',
        allowNull: false,
        isPk: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: true
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
        type: 'varchar(255)',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: true
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
        type: 'varchar(255)',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: true
        },
        label: 'Color',
        listColumn: {},
        editField: {
          type: 'text'
        }
      }
    },
    {
      name: 'userId',
      searchable: true,
      model: {
        type: 'int',
        allowNull: true
      },
      layout: {
        visible: {
          entityPage: true,
          detail: true,
          relation: true
        },
        label: 'UserId',
        listColumn: {},
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