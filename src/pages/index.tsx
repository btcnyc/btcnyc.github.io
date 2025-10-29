import React from 'react';
import styles from './index.module.css';

export default function Home() {
  return (
    <main style={{maxWidth:920, margin:'0 auto', padding:'4rem 1rem'}}>
      <img
        src="/img/logo.png"
        alt="Bitcoin Network NYC logo"
        style={{display:'block', margin:'0 auto 2rem', maxWidth:200, width:'100%'}}
      />
      <h1 style={{textAlign:'center'}}>🗽 The Bitcoin Network NYC</h1>
      <p><b>Hosting Bitcoin workshops and community events in New York City.</b></p>
      <p>Hands-on classes, node installs, Lightning, privacy, mining, and more — open to all skill levels.</p>

      <section className={styles.categories}>
        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Donate</h2>
          <div className={styles.ctaGrid}>
            <a className={`button button--primary button--lg ${styles.ctaButton}`} href="https://bitcoin-network-nyc.com/">� Donate (BTCPay)</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://account.venmo.com/u/harrisonfriedes">💵 Venmo @harrisonfriedes</a>
          </div>
        </div>

        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Meetup Platforms</h2>
          <div className={styles.ctaGrid}>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://www.meetup.com/bitcoin-network-nyc/">�️ Meetup</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://luma.com/btcnyc">🎫 Luma</a>
          </div>
        </div>

        <div className={styles.category}>
          <h2 className={styles.categoryTitle}>Digital platforms</h2>
          <div className={styles.ctaGrid}>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://btcnyc.github.io/classes/">📚 Classes & Guides</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://t.me/+M79B-75J2YU3OTRh">� Telegram</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://t.me/harlembitcoin/1">🏙️ Harlem Bitcoin Community Telegram</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://t.me/+J3quERCM1EI5Zjkx">� Mises Caucus Telegram</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://x.com/BTCNetworkNYC">� X (Twitter)</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://github.com/btcnyc">🐙 GitHub</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://www.linkedin.com/company/the-bitcoin-network-nyc/">🔗 LinkedIn</a>
            <a className={`button button--secondary button--lg ${styles.ctaButton}`} href="https://njump.me/npub1xyu3s3zt3v44l3rj5gn90xk33n387sgtjepcvxnqvd5rt58fpzzsx0055n">🧡 Nostr</a>
          </div>
        </div>
      </section>
    </main>
  );
}
