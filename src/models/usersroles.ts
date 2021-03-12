export default {
  name: 'usersroles',
  connector: 'mainDatabase',
  visible: true,
  properties: [
    {
      name: 'userId',
      type: 'number',
      isPk: true
    },
    {
      name: 'roleId',
      type: 'number',
      isPk: true
    }
  ],
  relations: [
    {
      type: 'n:1',
      relationalEntity: 'usersroles',
      foreignKey: 'userId',
      remoteEntity: 'users'
    },
    {
      type: 'n:1',
      relationalEntity: 'usersroles',
      foreignKey: 'roleId',
      remoteEntity: 'roles'
    }
  ]
}