import blogs from './content/blogs.json'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'DesignTees Blog',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: `https://designtees.netlify.app/`
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'DesignTees BLog'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'DesignTees Blog'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'DesignTees Blog'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'DesignTees Blog'
      },
      {
        hid: 'og:article:author',
        property: 'og:article:author',
        content: 'DesignTees Blog'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'DesignTees Blog'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'DesignTees Blog'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'DesignTees Blog'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * Plugins
   */
  plugins: ['~/plugins/lazyload'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-KTPLXDJ' }],
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],

  /**
   * Google fonts
   */
  webfontloader: {
    google: {
      families: ['Rubik:400,700', 'Karla:400,700,400i,700i'] // Loads Lato font with weights 400 and 700
    }
  },

  /**
   * Font Awesome
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faTwitter',
          'faInstagram',
          'faFacebook',
          'faGithub',
          'faVuejs',
          'faReact',
          'faJs',
          'faDocker',
          'faWordpress',
          'faNodeJs',
          'faYarn'
        ]
      }
    ]
  },

  /**
   * Manifest
   */
  manifest: {
    name: 'DesignTees Blog',
    short_name: 'DesignTees Blog',
    lang: 'en'
  },

  /**
   * sitemap
   */
  sitemap: {
    hostname: 'https://designtees.netlify.app',
    gzip: true,
    exclude: ['/admin/']
  },

  /**
   * Robots
   */
  robots: {
    UserAgent: '*',
    Disallow: '/admin'
  },

  /**
   * Generate config
   */
  generate: {
    routes: [].concat(blogs.map(blog => `/blog/${blog.slug}`))
  },

  /**
   * Transition
   */
  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      })
    }
  }
}
