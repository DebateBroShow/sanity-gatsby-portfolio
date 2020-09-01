import {
  format
} from 'date-fns'

export default {
  name: 'recentPodcast',
  title: 'Most Recent Podcast',
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
      name: 'podcast',
      title: 'Most Recent Podcast',
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
      slug: 'slug'
    },
    prepare({
      title = 'No title',
      slug = {},
    }) {
      const dateSegment = format(podcast.publishedDate, 'YYYY/MM')
      const path = `/${dateSegment}/${slug.current}/`
      return {
        title,
        subtitle: podcast.publishedDate ? path : 'Missing publishing date'
      }
    }
  }
}
