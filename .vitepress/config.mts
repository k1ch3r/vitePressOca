import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitePressOca/",
  title: "oca docs",
  description: "tryna document my oca prep",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Content',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
          { text: 'Intro & Basics', link: '/basics' },
          { text: 'Code Formatting & Docs', link: '/format' },
          { text: 'Primitive Data Types', link: '/primitives' },
          { text: 'Reference Types', link: '/reference' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/k1ch3r/vitePressOca' },
    ]
  }
})
