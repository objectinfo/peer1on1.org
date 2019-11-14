const config = {
  siteTitle: 'Peer 1 on 1',
  siteTitleShort: 'Peer 1 on 1',
  siteTitleAlt: 'Peer 1 on 1',
  siteLogo: '/logos/peer1on1logo.jpg',
  siteUrl: 'https://www.peer1on1.org',
  amazonSmileUrl: 'https://smile.amazon.com/ref=smi_ext_ch_82-2566065_dl?_encoding=UTF8&ein=82-2566065&ref_=smi_chpf_redirect&ref_=smi_ext_ch_82-2566065_cl',
  repo: 'https://github.com/objectinfo/peer1on1.org.git',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM DD, YYYY',
  siteDescription:
    '',
  siteRss: '/rss.xml',
  googleAnalyticsID: '',
  postDefaultCategoryID: '',
  commentsApi: '',
  userName: 'Peer1on1',
  userEmail: 'peer1on1.org@gmail.com',
  userTwitter: '',
  menuLinks: [
    {
      name: 'About',
      link: '/about',
    },
  ],
  themeColor: '#3F80FF', 
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
