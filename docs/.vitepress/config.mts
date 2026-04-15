import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Rust Learning Roadmap',
  description: 'A practical Rust learning roadmap for backend engineers.',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '路线图', link: '/02-roadmap' },
      { text: '项目阶梯', link: '/04-project-ladder' },
    ],
    sidebar: [
      {
        text: '导览',
        items: [
          { text: '首页', link: '/' },
          { text: '为什么学 Rust', link: '/01-why-rust' },
          { text: '学习路线图', link: '/02-roadmap' },
          { text: '核心概念', link: '/03-core-concepts' },
          { text: '项目阶梯', link: '/04-project-ladder' },
          { text: '学习节奏', link: '/05-study-rhythm' },
          { text: 'Rust for Backend Engineers', link: '/06-rust-for-backend-engineers' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/KM10101/rust-learning-roadmap' },
    ],
  },
})
