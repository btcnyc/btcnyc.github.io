import React from 'react';

export default function Home() {
  return (
    <main style={{maxWidth:920, margin:'0 auto', padding:'4rem 1rem'}}>
      <h1>🗽 The Bitcoin Network NYC</h1>
      <p><b>Hosting Bitcoin workshops and community events in New York City.</b></p>
      <p>Hands-on classes, node installs, Lightning, privacy, mining, and more — open to all skill levels.</p>

      <div style={{display:'grid', gap:'12px', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', marginTop:24}}>
        <a className="button button--primary button--lg" href="https://btcnyc.github.io/classes/">📚 Classes & Guides</a>
        <a className="button button--secondary button--lg" href="https://www.meetup.com/bitcoin-network-nyc/">🎟️ Meetup</a>
        <a className="button button--secondary button--lg" href="https://luma.com/btcnyc">🎫 Luma</a>
        <a className="button button--secondary button--lg" href="https://t.me/+M79B-75J2YU3OTRh">💬 Telegram</a>
        <a className="button button--secondary button--lg" href="https://t.me/+J3quERCM1EI5Zjkx">🗽 Mises Caucus Telegram</a>
        <a className="button button--secondary button--lg" href="https://x.com/BTCNetworkNYC">🐦 X (Twitter)</a>
        <a className="button button--secondary button--lg" href="https://bitcoin-network-nyc.com/">💸 Donate (BTCPay)</a>
        <a className="button button--secondary button--lg" href="https://account.venmo.com/u/harrisonfriedes">💵 Venmo @harrisonfriedes</a>
        <a className="button button--secondary button--lg" href="https://github.com/btcnyc">🐙 GitHub</a>
        <a className="button button--secondary button--lg" href="https://www.linkedin.com/company/the-bitcoin-network-nyc/">🔗 LinkedIn</a>
        <a className="button button--secondary button--lg" href="https://njump.me/npub1xyu3s3zt3v44l3rj5gn90xk33n387sgtjepcvxnqvd5rt58fpzzsx0055n">🧡 Nostr</a>
      </div>
    </main>
  );
}
