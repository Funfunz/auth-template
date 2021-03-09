export default {
  name: 'roles',
  connector: 'mainDatabase',
  visible: false,
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
  relations: [
    {
      type: 'm:n',
      relationalTable: 'usersroles',
      foreignKey: 'roleId',
      remoteTable: 'users',
      remoteForeignKey: 'userId',
    },
  ],
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
        type: 'string',
        allowNull: false
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
  ],
  layout: {
    label: 'Roles',
    listPage: {},
    searchField: {},
    createButton: {},
    editButton: {},
    deleteButton: {},
    editPage: {
      sections: []
    }
  }
}