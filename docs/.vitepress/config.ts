import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Dawn",
  description: "Tech,Life",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'API', link: '/api-examples' },
      { text: 'About', link: '/aboutme' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'About Me', link: '/aboutme' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/javaworldcn/psblog' }
    ]
  }
})
