export default {
    type: 'object',
    name: 'host',
    title: 'Host',
    fields: [
      {
        title: 'Person',
        name: 'person',
        type: 'reference',
        to: {type: 'person'}
      },
      {
        title: 'Roles',
        name: 'roles',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'radio',
          list: [
            {title: 'Host', value: 'host'},
            {title: 'Guest', value: 'guest'}
          ]
        }
      }
    ],
    preview: {
      select: {
        personName: 'person.name',
        roles: 'roles',
        media: 'person.image'
      },
      prepare (data) {
        return {
          ...data,
          title: data.personName,
          subtitle: data.roles && data.roles.join('/')
        }
      }
    }
  }
  