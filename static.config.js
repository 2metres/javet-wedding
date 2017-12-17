import 'dotenv/config'
import { request } from 'graphql-request'

import webpackConfig from './webpack.config'

const query =
 `{
    nav: allNavs {
      title
      slug
    }
    homepages: allHomepages {
      title
      body
    }
    questions: allQuestions(orderBy: order_ASC) {
      order
      slug
      prompt
      hint
      format
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
  siteRoot: 'https://javetwedding.com',
  getSiteProps: () => ({
    site: {
      title: 'Jack & Yvette’s Wedding',
    },
  }),
  getRoutes: async () => {
    const {
      nav,
      questions,
      homepages,
      events,
    } = await request(process.env.GRAPHCMS_API, query)

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({
          homepage: homepages[0],
          questions,
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
