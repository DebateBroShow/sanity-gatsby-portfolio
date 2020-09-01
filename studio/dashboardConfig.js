export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4e014090bc06a4906cb5ee',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kekwa336',
                  apiId: 'dc2d6cfd-cf68-4bec-806f-6aea06b7cd57'
                },
                {
                  buildHookId: '5f4e0140529e1aa6a284b621',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-8ukku8h3',
                  apiId: '8be40a35-d7fb-4634-8394-fd4d3b103351'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DebateBroShow/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-8ukku8h3.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
