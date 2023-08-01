import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  title: "Dawn",
  description: "Tech,Lifexxx",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术',
        items: [
          { text: '前端', link: '/tech/web' },
          { text: '后端', link: '/tech/backend' },
          { text: '常见问题', link: '/tech/issue' },
          { text: '个人作品', link: '/tech/myproject'}
        ]
      },
      { text: '生活', 
      items: [
        { text: '旅行', link: '/life/travel' },
        { text: '想法', link: '/life/thinking' }
      ]
     },
      { text: '关于我', link: '/aboutme' }
    ],

    sidebar: [
      {
        text: '全部',
        items: [
          { text: '技术',
            items: [
              { text: '前端', link: '/tech/web' },
              { text: '后端', link: '/tech/backend' },
              { text: '常见问题', link: '/tech/issue' },
              { text: '个人作品', link: '/tech/myproject'}
            ]
          },
          { text: '旅行', link: '/life/travel' },
          { text: '关于我', link: '/aboutme' }
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Scott Peng'
    },
    search: {
      provider: 'algolia',
      options: {
        appId: 'F919JCK8WY',
        apiKey: '3eca209ad24bdfc26db63382dd5e4490',
        indexName: 'sugarat_top',
        placeholder: '请输入要搜索的内容...'
      }
    },
    editLink: {
      pattern: 'https://github.com/javaworldcn/psblog/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/javaworldcn/psblog' }
    ]
  }
})
