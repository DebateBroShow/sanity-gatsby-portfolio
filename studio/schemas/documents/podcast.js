import {
  format
} from 'date-fns'

export default {
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [{
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      title: 'SoundCloud Link',
      name: 'href',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['https']
      })
    },
    {
      title: 'SoundCloud Embed Width',
      name: 'width',
      type: 'array',
      of: [{
        type: 'number'
      }],
      options: {
        layout: 'radio',
        list: [{
            title: '300',
            value: 300
          },
          {
            title: '500',
            value: 500
          },
          {
            title: '650',
            value: 650
          },
        ]
      }
    },
    {
      title: 'SoundCloud Options',
      name: 'parameters',
      type: 'array',
      of: [{
        type: 'string'
      }],
      options: {
        layout: 'radio',
        list: [{
            title: 'Autoplay',
            value: 'autoplay'
          },
          {
            title: 'Buying',
            value: 'buying'
          },
          {
            title: 'Sharing',
            value: 'sharing'
          },
          {
            title: 'Download',
            value: 'download'
          },
          {
            title: 'Show Playcount',
            value: 'show_playcount'
          },
          {
            title: 'Show User',
            value: 'show_user'
          }
        ]
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      description: 'When the podcast created',
      type: 'datetime'
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'simplePortableText'
    },
    {
      name: 'hosts',
      title: 'Hosts',
      type: 'array',
      of: [{
        type: 'host'
      }]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'category'
        }
      }]
    },
    {
      name: 'description',
      title: 'Long Description',
      type: 'projectPortableText'
    },
    {
      name: 'relatedProjects',
      title: 'Related projects',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'podcast'
        }
      }]
    }
  ],
  initialValue: {
    parameters: ['False',
      'False',
      'True',
      'True',
      'True',
      'True']
    },
    preview: {
      select: {
        title: 'title',
        publishedAt: 'publishedAt',
        slug: 'slug'
      },
      prepare({
        title = 'No title',
        publishedAt,
        slug = {},
        media
      }) {
        const dateSegment = format(publishedAt, 'YYYY/MM')
        const path = `/${dateSegment}/${slug.current}/`
        return {
          title,
          subtitle: publishedAt ? path : 'Missing publishing date'
        }
      }
    }
  }
