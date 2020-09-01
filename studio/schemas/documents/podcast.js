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
        type: 'person'
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
