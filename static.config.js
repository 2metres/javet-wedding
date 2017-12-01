import 'dotenv/config'
import { request } from 'graphql-request'

import webpackConfig from './webpack.config'

const query = `{
  events: allEvents {
    icon
    id
    time
    title
    slug
  }
  homepages: allHomepages {
    title
    body
  }
}`

export default {
  getSiteProps: () => ({
    site: {
      title: 'Jack & Yvette’s Wedding',
    },
  }),
  getRoutes: async () => {
    const {
      homepages,
      events,
    } = await request(process.env.GRAPHCMS_API, query)

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({
          homepage: homepages[0],
          events,
        }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: [webpackConfig],
}
