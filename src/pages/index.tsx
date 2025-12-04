import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaGithub, FaTelegram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import { SiMeetup } from 'react-icons/si';
import styles from './index.module.css';

type IconRenderer = () => React.ReactNode;

type ButtonConfig = {
  label: string;
  href: string;
  Icon: IconRenderer;
  variant?: 'primary' | 'secondary';
  iconOnly?: boolean;
};

type SectionConfig = {
  title: string;
  buttons: ButtonConfig[];
  useRowLayout?: boolean;
};

const ICON_SIZE = 24;

const BookIcon: IconRenderer = () => {
  const bookLogo = useBaseUrl('img/open-book.png');
  return (
    <img
      src={bookLogo}
      alt=""
      role="presentation"
      aria-hidden="true"
      loading="lazy"
      className={`${styles.iconImage} ${styles.iconImageMonochrome}`}
    />
  );
};

const BtcpayIcon: IconRenderer = () => {
  const btcpayLogo = useBaseUrl('img/btcpay_logo.png');
  return (
    <img
      src={btcpayLogo}
      alt=""
      role="presentation"
      aria-hidden="true"
      loading="lazy"
      className={styles.iconImage}
    />
  );
};

const LumaIcon: IconRenderer = () => {
  const lumaLogo = useBaseUrl('img/luma_logo.png');
  return (
    <img
      src={lumaLogo}
      alt=""
      role="presentation"
      aria-hidden="true"
      loading="lazy"
      className={styles.iconImage}
    />
  );
};

const NostrIcon: IconRenderer = () => {
  const nostrLogo = useBaseUrl('img/nostr_logo.png');
  return (
    <img
      src={nostrLogo}
      alt=""
      role="presentation"
      aria-hidden="true"
      loading="lazy"
      className={`${styles.iconImage} ${styles.iconImageMonochrome}`}
    />
  );
};

const VenmoIcon: IconRenderer = () => {
  const venmoLogo = useBaseUrl('img/Venmo.png');
  return (
    <img
      src={venmoLogo}
      alt=""
      role="presentation"
      aria-hidden="true"
      loading="lazy"
      className={`${styles.iconImage} ${styles.iconImageMonochrome}`}
    />
  );
};

const CTA_SECTIONS: SectionConfig[] = [
  {
    title: 'Resources',
    buttons: [
      {
        label: 'Classes & Guides',
        href: 'https://btcnyc.github.io/classes/',
        Icon: BookIcon,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/btcnyc',
        Icon: () => <FaGithub size={ICON_SIZE} aria-hidden="true" focusable="false" />,
      },
    ],
  },
  {
    title: 'Donate',
    buttons: [
      {
        label: 'Donate (BTCPay)',
        href: 'https://bitcoin-network-nyc.com/',
        Icon: BtcpayIcon,
      },
      {
        label: 'Venmo',
        href: 'https://account.venmo.com/u/harrisonfriedes',
        Icon: VenmoIcon,
      },
    ],
  },
  {
    title: 'Meetup Platforms',
    buttons: [
      {
        label: 'Meetup',
        href: 'https://www.meetup.com/bitcoin-network-nyc/',
        Icon: () => <SiMeetup size={ICON_SIZE} aria-hidden="true" focusable="false" />,
      },
      {
        label: 'Luma',
        href: 'https://luma.com/freedomlab',
        Icon: LumaIcon,
      },
    ],
  },
  {
    title: 'Digital Platforms',
    useRowLayout: true,
    buttons: [
      {
        label: 'Telegram',
        href: 'https://t.me/+M79B-75J2YU3OTRh',
        Icon: () => <FaTelegram size={ICON_SIZE} aria-hidden="true" focusable="false" />,
        iconOnly: true,
      },
      {
        label: 'X (Twitter)',
        href: 'https://x.com/BTCNetworkNYC',
        Icon: () => <FaXTwitter size={ICON_SIZE} aria-hidden="true" focusable="false" />,
        iconOnly: true,
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/the-bitcoin-network-nyc/',
        Icon: () => <FaLinkedinIn size={ICON_SIZE} aria-hidden="true" focusable="false" />,
        iconOnly: true,
      },
      {
        label: 'Nostr',
        href: 'https://njump.me/npub1xyu3s3zt3v44l3rj5gn90xk33n387sgtjepcvxnqvd5rt58fpzzsx0055n',
        Icon: NostrIcon,
        iconOnly: true,
      },
    ],
  },
];

const ButtonIcon = ({ Icon }: { Icon: IconRenderer }) => (
  <span className={styles.iconWrapper}>
    <Icon />
  </span>
);

export default function Home() {
  const heroLogo = useBaseUrl('img/Freedom Lab NYC Logo - Circle.png');

  return (
    <main style={{ maxWidth: 920, margin: '0 auto', padding: '4rem 1rem' }}>
      <img
        src={heroLogo}
        alt="Freedom Lab NYC logo"
        style={{ display: 'block', margin: '0 auto 2rem', maxWidth: 200, width: '100%' }}
      />
      <h1 style={{ textAlign: 'center' }}>Freedom Lab NYC</h1>
      <p>
        <b>New York City's premier Freedom Tech community space and educational center. 🗽</b>
      </p>

      <div className={styles.ctaSections}>
        {CTA_SECTIONS.map((section) => (
          <section key={section.title} className={styles.ctaSection}>
            <h2 className={styles.ctaHeading}>{section.title}</h2>
            <div
              className={`${styles.ctaGrid} ${section.useRowLayout ? styles.ctaGridRow : ''}`}
            >
              {section.buttons.map((button) => {
                const buttonClasses = [
                  'button',
                  `button--${button.variant ?? 'secondary'}`,
                  'button--lg',
                  styles.ctaButton,
                  button.iconOnly ? styles.ctaButtonIconOnly : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                const contentClasses = [
                  styles.ctaButtonContent,
                  button.iconOnly ? styles.ctaButtonContentIconOnly : '',
                ]
                  .filter(Boolean)
                  .join(' ');

                return (
                  <a key={button.label} className={buttonClasses} href={button.href}>
                    <span className={contentClasses}>
                      <ButtonIcon Icon={button.Icon} />
                      {button.iconOnly ? (
                        <span className={styles.visuallyHidden}>{button.label}</span>
                      ) : (
                        <span>{button.label}</span>
                      )}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
