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
          { text: 'Classes Intro', link: '/classes' },
          { text: 'Primitive Data Types', link: '/primitives' },
          { text: 'Reference Types', link: '/reference' },
          { text: 'Classes & Methods', link: '/reference' },
          { text: 'Control Structures I', link: '/controlLogic' },
          // { text: 'Control Structures: Repetition', link: '/reference' },
          { text: 'Scope & Access Modifiers', link: '/scope' },
          { text: 'Strings', link: '/strings' },
          // { text: 'StringBuilder', link: '/stringBuilder' },
          { text: 'Arrays', link: '/arrays' },
          { text: 'ArrayLists', link: '/arraylists' },
          { text: 'java.time', link: '/dates' },

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/k1ch3r/vitePressOca' },
    ]
  }
})
