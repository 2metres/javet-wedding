import 'dotenv/config'
import { request } from 'graphql-request'

import webpackConfig from './webpack.config'

const query = `{
  events: allEvents {
    id
    slug
    title
    time
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
      events,
    } = await request(process.env.GRAPHCMS_API, query)

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({ events }),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: [webpackConfig],
}
