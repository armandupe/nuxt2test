export default {
  head: {
    title: 'nuxt2test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#00bfff' },
  css: ['@/assets/css/main.css'],
  plugins: [],
  modules: [],
  build: {
    extend(config, ctx) {},
  },
};
