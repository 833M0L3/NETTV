import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nettvdocs",
  description: "Docs and comprehensive guides about Worldlink Communication's NETTV",
  base: '/NETTV/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting started', link: '/pages/getting-started' },
          { text: 'NETTV Setup Box Variants', link: '/pages/boxes' }
        ],
      },
      {
        text: 'Bypass Methods',
        items: [
          { text: 'Why Bypass?', link: '/pages/bypassintro' },
          { text: 'Bypass Method 1', link: '/pages/method1' },
          { text: 'Bypass Method 2', link: '/pages/method2' },
          { text: 'Bypass Method 3', link: '/pages/method3' }
        ],
      },
      {
        text: 'Customisation / Apps',
        items: [
          { text: 'Optimal Launchers', link: '/pages/optimal' },
          { text: 'Recommended Apps', link: '/pages/apps' },
          { text: 'Blocking Ads', link: '/pages/ads' },
          { text: 'NETTV Firmwares', link: '/pages/firmware' }
        ],
      }
    ],
    lastUpdated: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/833M0L3/NETTV' }
    ],
    editLink: {
      pattern: 'https://github.com/833M0L3/NETTV/edit/main/docs/:path'
    }
  }
})
