export default {
  name: 'usersroles',
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
      name: 'userId',
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
        label: 'UserId',
        listColumn: {},
        editField: {
          type: 'number'
        }
      }
    },
    {
      name: 'roleId',
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
          relation: false
        },
        label: 'RoleId',
        listColumn: {},
        editField: {
          type: 'number'
        }
      }
    }
  ],
  layout: {
    label: 'Usersroles',
    listPage: {},
    searchField: {},
    createButton: {},
    editButton: {},
    deleteButton: {},
    editPage: {
      sections: []
    }
  },
  relations: [
    {
      type: 'n:1',
      relationalTable: 'usersroles',
      foreignKey: 'userId',
      remoteTable: 'users'
    },
    {
      type: 'n:1',
      relationalTable: 'usersroles',
      foreignKey: 'roleId',
      remoteTable: 'roles'
    }
  ]
}