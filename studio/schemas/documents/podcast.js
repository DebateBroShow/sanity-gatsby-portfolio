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
      description: 'Please select only one!',
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
      name: 'shortDescription',
      title: 'Short Description',
      type: 'simplePortableText'
    },
    {
      name: 'description',
      title: 'Long Description',
      type: 'projectPortableText'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      fields: [{
        name: 'caption',
        type: 'string',
        title: 'Caption',
        options: {
          isHighlighted: true // <-- make this field easily accessible
        }
      }]
    },
    {
      name: 'relatedPodcast',
      title: 'Related Podcasts',
      type: 'array',
      of: [{
        type: 'reference',
        to: {
          type: 'podcast'
        }
      }]
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      description: 'When the podcast created',
      type: 'datetime'
    }
  ],
  initialValue: {
    parameters: [false,
      0,
      1,
      1,
      true,
      1
    ]
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
