import 'dotenv/config'
import { request } from 'graphql-request'

import webpackConfig from './webpack.config'

const query = `{
  nav: allNavs {
    title
    slug
  }
  homepages: allHomepages {
    title
    body
  }
  events: allEvents(orderBy: order_ASC) {
    icon
    id
    time
    title
    slug
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
      nav,
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
          nav,
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
