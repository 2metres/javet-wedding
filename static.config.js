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
    faqs: allFAQs (orderBy: order_ASC) {
      title
      body
    }
  }`

export default {
  siteRoot: process.env.SITE_ROOT_URL,
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
      faqs,
    } = await request(process.env.GRAPHCMS_API, query)

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getProps: () => ({
          homepage: homepages[0],
          questions,
          events,
          faqs,
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
