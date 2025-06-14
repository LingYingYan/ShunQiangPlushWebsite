module.exports = {
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Noto+Sans+SC:wght@400;700&family=Poppins:wght@500;700&display=swap'
    }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Wuxi Shunqiang',
      description: 'A site for Wuxi Shunqiang'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '无锡顺强',
      description: '无锡顺强毛绒的网站'
    }
  },
  themeConfig: {
    search: false,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Our Product', link: '/products/' },
          { text: 'Contact Us', link: '/contact/' },
        ]
      },
      '/zh/': {
        selectText: '语言',
        label: '简体中文',
        nav: [
          { text: '主页', link: '/zh/' },
          { text: '我们的产品', link: '/zh/products/' },
          { text: '联系我们', link: '/zh/contact/' }
        ]
      }
    }
  }
}
