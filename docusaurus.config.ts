// docusaurus.config.js
export default {
  title: 'Freedom Lab NYC',
  tagline: 'Learn. Build. Connect. Empower.',
  url: 'https://freedomlab.nyc',
  baseUrl: '/',
  favicon: 'img/Freedom Lab NYC Logo - Circle.png',
  organizationName: 'btcnyc',      // GitHub org
  projectName: 'btcnyc.github.io', // This repo
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'BTC NYC',
      logo: { alt: 'BTC NYC', src: 'img/logo.png' },
      items: [
        { label: 'Classes', href: 'https://btcnyc.github.io/classes/' },
        { label: 'Meetup', href: 'https://www.meetup.com/bitcoin-network-nyc/' },
        { label: 'Luma', href: 'https://luma.com/btcnyc' },
        { label: 'Telegram', href: 'https://t.me/+M79B-75J2YU3OTRh', position: 'right' },
        { label: 'Donate', href: 'https://bitcoin-network-nyc.com/', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Learn', items: [{label:'Classes', href:'https://btcnyc.github.io/classes/'}]},
        { title: 'Community', items: [
          {label:'Telegram', href:'https://t.me/+M79B-75J2YU3OTRh'},
          {label:'X (Twitter)', href:'https://x.com/BTCNetworkNYC'},
          {label:'Nostr', href:'https://njump.me/npub1xyu3s3zt3v44l3rj5gn90xk33n387sgtjepcvxnqvd5rt58fpzzsx0055n'},
          {label:'LinkedIn', href:'https://www.linkedin.com/company/the-bitcoin-network-nyc/'},
        ]},
        { title: 'Support', items: [
          {label:'Donate (BTCPay)', href:'https://bitcoin-network-nyc.com/'},
          {label:'Venmo', href:'https://account.venmo.com/u/harrisonfriedes'},
        ]},
      ],
      copyright: `© ${new Date().getFullYear()} Bitcoin Network NYC`,
    },
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
    prism: { /* keep defaults */ },
  },
  presets: [
    ['@docusaurus/preset-classic',
      {
        docs: false, blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      }
    ],
  ],
};