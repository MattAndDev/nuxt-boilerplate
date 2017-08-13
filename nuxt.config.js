module.exports = {
  // Headers of the page
  head: {
    title: 'nuxt-vue-kickstart',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // Customize the progress-bar color
  loading: { color: '#3B8070' },
  // Build configuration
  build: {
    // add support for svgo
    extend (config) {
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.test = /\.(png|jpe?g|gif)$/
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        exclude: /node_modules/
      })
    }
  },
  vendor: [
    'window-config'
  ],
  plugins: [
    { src: '~/plugins/client-utils/window-config.js', ssr: false }
  ]
}
