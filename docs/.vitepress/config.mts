import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '学习一生',
  description: "学会做人、学会生活和学会学习是我们成长和发展的重要方面",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: [
      {
        text: 'HTML',
        items: [
          { text: '基础', link: '/HTML/' },
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: '基础', link: '/CSS/' },
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: '基础', link: '/JavaScript/' },
        ]
      },
    ],
    search: {
      provider: 'local'
    },
  },
  vite: {
    server: {
      port: 5173,
      host: '0.0.0.0'
    }
  }
})
