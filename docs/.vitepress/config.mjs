import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "nettvdocs",
  description: "Docs and comprehensive guides about Worldlink Communication's NETTV",
  base: '/NETTV/',
  editLink: {
    pattern: 'https://github.com/833M0L3/NETTV/edit/main/docs/:path'
  },
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      message: '<a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Open-source Apache Licensed</a> <span class="divider">|</span> <a href="https://www.nettv.com.np/">NETTV</a>',
      copyright: 'Copyright © 2025 833M0L3'
    },
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
          { text: 'NETTV Firmwares', link: '/pages/firmware' },
          { text: 'IPTV Apps', link: '/pages/iptv' },
          { text: 'Linux Installation', link: '/pages/linux' }
        ],
      }
    ],
    lastUpdated: true,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/833M0L3/NETTV' }
    ]
  }
})
