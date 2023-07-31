import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Dawn",
  description: "Tech,Life",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术', link: '/tech' },
      { text: '生活', link: '/life' },
      { text: '关于我', link: '/aboutme' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '技术', link: '/tech' },
          { text: '生活', link: '/life' },
          { text: '关于我', link: '/aboutme' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/javaworldcn/psblog' }
    ]
  }
})
